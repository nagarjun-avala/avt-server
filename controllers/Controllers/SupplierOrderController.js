
const { SupplierOrder } = require('../models');

exports.createSupplierOrder = async (req, res) => {{
    try {{
        const data = await SupplierOrder.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllSupplierOrders = async (req, res) => {{
    try {{
        const data = await SupplierOrder.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getSupplierOrderById = async (req, res) => {{
    try {{
        const data = await SupplierOrder.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "SupplierOrder not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateSupplierOrder = async (req, res) => {{
    try {{
        const [updated] = await SupplierOrder.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "SupplierOrder not found" }});
        res.status(200).json({{ message: "SupplierOrder updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteSupplierOrder = async (req, res) => {{
    try {{
        const deleted = await SupplierOrder.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "SupplierOrder not found" }});
        res.status(200).json({{ message: "SupplierOrder deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
