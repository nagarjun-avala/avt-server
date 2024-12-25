
const { Barcode } = require('../models');

exports.createBarcode = async (req, res) => {{
    try {{
        const data = await Barcode.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllBarcodes = async (req, res) => {{
    try {{
        const data = await Barcode.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getBarcodeById = async (req, res) => {{
    try {{
        const data = await Barcode.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "Barcode not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateBarcode = async (req, res) => {{
    try {{
        const [updated] = await Barcode.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "Barcode not found" }});
        res.status(200).json({{ message: "Barcode updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteBarcode = async (req, res) => {{
    try {{
        const deleted = await Barcode.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "Barcode not found" }});
        res.status(200).json({{ message: "Barcode deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
