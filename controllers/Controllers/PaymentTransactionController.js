
const { PaymentTransaction } = require('../models');

exports.createPaymentTransaction = async (req, res) => {{
    try {{
        const data = await PaymentTransaction.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllPaymentTransactions = async (req, res) => {{
    try {{
        const data = await PaymentTransaction.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getPaymentTransactionById = async (req, res) => {{
    try {{
        const data = await PaymentTransaction.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "PaymentTransaction not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updatePaymentTransaction = async (req, res) => {{
    try {{
        const [updated] = await PaymentTransaction.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "PaymentTransaction not found" }});
        res.status(200).json({{ message: "PaymentTransaction updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deletePaymentTransaction = async (req, res) => {{
    try {{
        const deleted = await PaymentTransaction.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "PaymentTransaction not found" }});
        res.status(200).json({{ message: "PaymentTransaction deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
