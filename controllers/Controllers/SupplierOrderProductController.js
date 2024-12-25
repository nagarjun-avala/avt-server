
const { SupplierOrderProduct } = require('../models');

exports.createSupplierOrderProduct = async (req, res) => {{
    try {{
        const data = await SupplierOrderProduct.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllSupplierOrderProducts = async (req, res) => {{
    try {{
        const data = await SupplierOrderProduct.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getSupplierOrderProductById = async (req, res) => {{
    try {{
        const data = await SupplierOrderProduct.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "SupplierOrderProduct not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateSupplierOrderProduct = async (req, res) => {{
    try {{
        const [updated] = await SupplierOrderProduct.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "SupplierOrderProduct not found" }});
        res.status(200).json({{ message: "SupplierOrderProduct updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteSupplierOrderProduct = async (req, res) => {{
    try {{
        const deleted = await SupplierOrderProduct.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "SupplierOrderProduct not found" }});
        res.status(200).json({{ message: "SupplierOrderProduct deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
