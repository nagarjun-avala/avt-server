
const { InventoryTransaction } = require('../models');

exports.createInventoryTransaction = async (req, res) => {{
    try {{
        const data = await InventoryTransaction.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllInventoryTransactions = async (req, res) => {{
    try {{
        const data = await InventoryTransaction.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getInventoryTransactionById = async (req, res) => {{
    try {{
        const data = await InventoryTransaction.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "InventoryTransaction not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateInventoryTransaction = async (req, res) => {{
    try {{
        const [updated] = await InventoryTransaction.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "InventoryTransaction not found" }});
        res.status(200).json({{ message: "InventoryTransaction updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteInventoryTransaction = async (req, res) => {{
    try {{
        const deleted = await InventoryTransaction.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "InventoryTransaction not found" }});
        res.status(200).json({{ message: "InventoryTransaction deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
