
const { User } = require('../models');

exports.createUser = async (req, res) => {{
    try {{
        const data = await User.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllUsers = async (req, res) => {{
    try {{
        const data = await User.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getUserById = async (req, res) => {{
    try {{
        const data = await User.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "User not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateUser = async (req, res) => {{
    try {{
        const [updated] = await User.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "User not found" }});
        res.status(200).json({{ message: "User updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteUser = async (req, res) => {{
    try {{
        const deleted = await User.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "User not found" }});
        res.status(200).json({{ message: "User deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
