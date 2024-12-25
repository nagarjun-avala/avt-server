
const { Address } = require('../models');

exports.createAddress = async (req, res) => {{
    try {{
        const data = await Address.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllAddresss = async (req, res) => {{
    try {{
        const data = await Address.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAddressById = async (req, res) => {{
    try {{
        const data = await Address.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "Address not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateAddress = async (req, res) => {{
    try {{
        const [updated] = await Address.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "Address not found" }});
        res.status(200).json({{ message: "Address updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteAddress = async (req, res) => {{
    try {{
        const deleted = await Address.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "Address not found" }});
        res.status(200).json({{ message: "Address deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
