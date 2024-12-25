
const { Role } = require('../models');

exports.createRole = async (req, res) => {{
    try {{
        const data = await Role.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllRoles = async (req, res) => {{
    try {{
        const data = await Role.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getRoleById = async (req, res) => {{
    try {{
        const data = await Role.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "Role not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateRole = async (req, res) => {{
    try {{
        const [updated] = await Role.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "Role not found" }});
        res.status(200).json({{ message: "Role updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteRole = async (req, res) => {{
    try {{
        const deleted = await Role.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "Role not found" }});
        res.status(200).json({{ message: "Role deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
