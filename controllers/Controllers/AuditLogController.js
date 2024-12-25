
const { AuditLog } = require('../models');

exports.createAuditLog = async (req, res) => {{
    try {{
        const data = await AuditLog.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllAuditLogs = async (req, res) => {{
    try {{
        const data = await AuditLog.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAuditLogById = async (req, res) => {{
    try {{
        const data = await AuditLog.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "AuditLog not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateAuditLog = async (req, res) => {{
    try {{
        const [updated] = await AuditLog.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "AuditLog not found" }});
        res.status(200).json({{ message: "AuditLog updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteAuditLog = async (req, res) => {{
    try {{
        const deleted = await AuditLog.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "AuditLog not found" }});
        res.status(200).json({{ message: "AuditLog deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
