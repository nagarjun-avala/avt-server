
const { Translation } = require('../models');

exports.createTranslation = async (req, res) => {{
    try {{
        const data = await Translation.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllTranslations = async (req, res) => {{
    try {{
        const data = await Translation.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getTranslationById = async (req, res) => {{
    try {{
        const data = await Translation.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "Translation not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateTranslation = async (req, res) => {{
    try {{
        const [updated] = await Translation.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "Translation not found" }});
        res.status(200).json({{ message: "Translation updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteTranslation = async (req, res) => {{
    try {{
        const deleted = await Translation.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "Translation not found" }});
        res.status(200).json({{ message: "Translation deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
