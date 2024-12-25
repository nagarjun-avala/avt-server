
const { Discount } = require('../models');

exports.createDiscount = async (req, res) => {{
    try {{
        const data = await Discount.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllDiscounts = async (req, res) => {{
    try {{
        const data = await Discount.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getDiscountById = async (req, res) => {{
    try {{
        const data = await Discount.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "Discount not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateDiscount = async (req, res) => {{
    try {{
        const [updated] = await Discount.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "Discount not found" }});
        res.status(200).json({{ message: "Discount updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteDiscount = async (req, res) => {{
    try {{
        const deleted = await Discount.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "Discount not found" }});
        res.status(200).json({{ message: "Discount deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
