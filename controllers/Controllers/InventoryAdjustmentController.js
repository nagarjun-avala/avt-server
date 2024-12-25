
const { InventoryAdjustment } = require('../models');

exports.createInventoryAdjustment = async (req, res) => {{
    try {{
        const data = await InventoryAdjustment.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllInventoryAdjustments = async (req, res) => {{
    try {{
        const data = await InventoryAdjustment.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getInventoryAdjustmentById = async (req, res) => {{
    try {{
        const data = await InventoryAdjustment.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "InventoryAdjustment not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateInventoryAdjustment = async (req, res) => {{
    try {{
        const [updated] = await InventoryAdjustment.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "InventoryAdjustment not found" }});
        res.status(200).json({{ message: "InventoryAdjustment updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteInventoryAdjustment = async (req, res) => {{
    try {{
        const deleted = await InventoryAdjustment.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "InventoryAdjustment not found" }});
        res.status(200).json({{ message: "InventoryAdjustment deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
