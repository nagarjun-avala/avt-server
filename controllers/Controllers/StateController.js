
const { State } = require('../models');

exports.createState = async (req, res) => {{
    try {{
        const data = await State.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllStates = async (req, res) => {{
    try {{
        const data = await State.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getStateById = async (req, res) => {{
    try {{
        const data = await State.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "State not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateState = async (req, res) => {{
    try {{
        const [updated] = await State.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "State not found" }});
        res.status(200).json({{ message: "State updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteState = async (req, res) => {{
    try {{
        const deleted = await State.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "State not found" }});
        res.status(200).json({{ message: "State deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
