
const { ReturnProduct } = require('../models');

exports.createReturnProduct = async (req, res) => {{
    try {{
        const data = await ReturnProduct.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllReturnProducts = async (req, res) => {{
    try {{
        const data = await ReturnProduct.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getReturnProductById = async (req, res) => {{
    try {{
        const data = await ReturnProduct.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "ReturnProduct not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateReturnProduct = async (req, res) => {{
    try {{
        const [updated] = await ReturnProduct.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "ReturnProduct not found" }});
        res.status(200).json({{ message: "ReturnProduct updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteReturnProduct = async (req, res) => {{
    try {{
        const deleted = await ReturnProduct.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "ReturnProduct not found" }});
        res.status(200).json({{ message: "ReturnProduct deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
