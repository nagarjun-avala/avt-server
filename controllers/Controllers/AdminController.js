
const { Admin } = require('../models');

exports.createAdmin = async (req, res) => {{
    try {{
        const data = await Admin.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllAdmins = async (req, res) => {{
    try {{
        const data = await Admin.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAdminById = async (req, res) => {{
    try {{
        const data = await Admin.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "Admin not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateAdmin = async (req, res) => {{
    try {{
        const [updated] = await Admin.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "Admin not found" }});
        res.status(200).json({{ message: "Admin updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteAdmin = async (req, res) => {{
    try {{
        const deleted = await Admin.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "Admin not found" }});
        res.status(200).json({{ message: "Admin deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
