
const { Review } = require('../models');

exports.createReview = async (req, res) => {{
    try {{
        const data = await Review.create(req.body);
        res.status(201).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getAllReviews = async (req, res) => {{
    try {{
        const data = await Review.findAll();
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.getReviewById = async (req, res) => {{
    try {{
        const data = await Review.findByPk(req.params.id);
        if (!data) return res.status(404).json({{ message: "Review not found" }});
        res.status(200).json(data);
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.updateReview = async (req, res) => {{
    try {{
        const [updated] = await Review.update(req.body, {{
            where: {{ id: req.params.id }}
        }});
        if (!updated) return res.status(404).json({{ message: "Review not found" }});
        res.status(200).json({{ message: "Review updated successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};

exports.deleteReview = async (req, res) => {{
    try {{
        const deleted = await Review.destroy({{
            where: {{ id: req.params.id }}
        }});
        if (!deleted) return res.status(404).json({{ message: "Review not found" }});
        res.status(200).json({{ message: "Review deleted successfully" }});
    }} catch (error) {{
        res.status(500).json({{ error: error.message }});
    }}
}};
