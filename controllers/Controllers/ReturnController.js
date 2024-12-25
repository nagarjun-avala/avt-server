
const { Return } = require('../models');

exports.createReturn = async (req, res) => {{
    try {{
        const data = await Return.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllReturns = async (req, res) => {{
    try {{
        const data = await Return.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getReturnById = async (req, res) => {{
    try {{
        const data = await Return.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "Return not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateReturn = async (req, res) => {{
    try {{
        const [updated] = await Return.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "Return not found" }});
        res.status(200).json({{ message: "Return updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteReturn = async (req, res) => {{
    try {{
        const deleted = await Return.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "Return not found" }});
        res.status(200).json({{ message: "Return deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
