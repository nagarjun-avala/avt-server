
const { Report } = require('../models');

exports.createReport = async (req, res) => {{
    try {{
        const data = await Report.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllReports = async (req, res) => {{
    try {{
        const data = await Report.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getReportById = async (req, res) => {{
    try {{
        const data = await Report.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "Report not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateReport = async (req, res) => {{
    try {{
        const [updated] = await Report.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "Report not found" }});
        res.status(200).json({{ message: "Report updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteReport = async (req, res) => {{
    try {{
        const deleted = await Report.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "Report not found" }});
        res.status(200).json({{ message: "Report deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
