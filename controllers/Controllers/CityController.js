
const { City } = require('../models');

exports.createCity = async (req, res) => {{
    try {{
        const data = await City.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllCitys = async (req, res) => {{
    try {{
        const data = await City.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getCityById = async (req, res) => {{
    try {{
        const data = await City.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "City not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateCity = async (req, res) => {{
    try {{
        const [updated] = await City.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "City not found" }});
        res.status(200).json({{ message: "City updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteCity = async (req, res) => {{
    try {{
        const deleted = await City.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "City not found" }});
        res.status(200).json({{ message: "City deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
