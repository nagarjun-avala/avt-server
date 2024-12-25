
const { Order } = require('../models');

exports.createOrder = async (req, res) => {{
    try {{
        const data = await Order.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllOrders = async (req, res) => {{
    try {{
        const data = await Order.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getOrderById = async (req, res) => {{
    try {{
        const data = await Order.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "Order not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateOrder = async (req, res) => {{
    try {{
        const [updated] = await Order.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "Order not found" }});
        res.status(200).json({{ message: "Order updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteOrder = async (req, res) => {{
    try {{
        const deleted = await Order.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "Order not found" }});
        res.status(200).json({{ message: "Order deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
