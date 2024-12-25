
const { Category } = require('../models');

exports.createCategory = async (req, res) => {{
    try {{
        const data = await Category.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllCategorys = async (req, res) => {{
    try {{
        const data = await Category.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getCategoryById = async (req, res) => {{
    try {{
        const data = await Category.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "Category not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateCategory = async (req, res) => {{
    try {{
        const [updated] = await Category.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "Category not found" }});
        res.status(200).json({{ message: "Category updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteCategory = async (req, res) => {{
    try {{
        const deleted = await Category.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "Category not found" }});
        res.status(200).json({{ message: "Category deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
