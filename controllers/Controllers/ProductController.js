
const { Product } = require('../models');

exports.createProduct = async (req, res) => {{
    try {{
        const data = await Product.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllProducts = async (req, res) => {{
    try {{
        const data = await Product.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getProductById = async (req, res) => {{
    try {{
        const data = await Product.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "Product not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateProduct = async (req, res) => {{
    try {{
        const [updated] = await Product.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "Product not found" }});
        res.status(200).json({{ message: "Product updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteProduct = async (req, res) => {{
    try {{
        const deleted = await Product.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "Product not found" }});
        res.status(200).json({{ message: "Product deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
