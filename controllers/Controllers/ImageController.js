
const { Image } = require('../models');

exports.createImage = async (req, res) => {{
    try {{
        const data = await Image.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllImages = async (req, res) => {{
    try {{
        const data = await Image.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getImageById = async (req, res) => {{
    try {{
        const data = await Image.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "Image not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateImage = async (req, res) => {{
    try {{
        const [updated] = await Image.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "Image not found" }});
        res.status(200).json({{ message: "Image updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteImage = async (req, res) => {{
    try {{
        const deleted = await Image.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "Image not found" }});
        res.status(200).json({{ message: "Image deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
