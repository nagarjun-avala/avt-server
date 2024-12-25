
const { Timezone } = require('../models');

exports.createTimezone = async (req, res) => {{
    try {{
        const data = await Timezone.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllTimezones = async (req, res) => {{
    try {{
        const data = await Timezone.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getTimezoneById = async (req, res) => {{
    try {{
        const data = await Timezone.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "Timezone not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateTimezone = async (req, res) => {{
    try {{
        const [updated] = await Timezone.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "Timezone not found" }});
        res.status(200).json({{ message: "Timezone updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteTimezone = async (req, res) => {{
    try {{
        const deleted = await Timezone.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "Timezone not found" }});
        res.status(200).json({{ message: "Timezone deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
