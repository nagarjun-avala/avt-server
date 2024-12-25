
const { Country } = require('../models');

exports.createCountry = async (req, res) => {{
    try {{
        const data = await Country.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllCountrys = async (req, res) => {{
    try {{
        const data = await Country.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getCountryById = async (req, res) => {{
    try {{
        const data = await Country.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "Country not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateCountry = async (req, res) => {{
    try {{
        const [updated] = await Country.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "Country not found" }});
        res.status(200).json({{ message: "Country updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteCountry = async (req, res) => {{
    try {{
        const deleted = await Country.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "Country not found" }});
        res.status(200).json({{ message: "Country deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
