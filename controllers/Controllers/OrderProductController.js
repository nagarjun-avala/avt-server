
const { OrderProduct } = require('../models');

exports.createOrderProduct = async (req, res) => {{
    try {{
        const data = await OrderProduct.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllOrderProducts = async (req, res) => {{
    try {{
        const data = await OrderProduct.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getOrderProductById = async (req, res) => {{
    try {{
        const data = await OrderProduct.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "OrderProduct not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateOrderProduct = async (req, res) => {{
    try {{
        const [updated] = await OrderProduct.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "OrderProduct not found" }});
        res.status(200).json({{ message: "OrderProduct updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteOrderProduct = async (req, res) => {{
    try {{
        const deleted = await OrderProduct.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "OrderProduct not found" }});
        res.status(200).json({{ message: "OrderProduct deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
