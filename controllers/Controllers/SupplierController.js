
const { Supplier } = require('../models');

exports.createSupplier = async (req, res) => {{
    try {{
        const data = await Supplier.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllSuppliers = async (req, res) => {{
    try {{
        const data = await Supplier.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getSupplierById = async (req, res) => {{
    try {{
        const data = await Supplier.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "Supplier not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateSupplier = async (req, res) => {{
    try {{
        const [updated] = await Supplier.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "Supplier not found" }});
        res.status(200).json({{ message: "Supplier updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteSupplier = async (req, res) => {{
    try {{
        const deleted = await Supplier.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "Supplier not found" }});
        res.status(200).json({{ message: "Supplier deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
