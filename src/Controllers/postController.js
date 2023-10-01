
exports.create = async (req, res) => {
    try {
      
      res.status(200).json({ status: "success", data: "Created successfully" });
    } catch (error) {
      res.status(500).json({ status: "error", error: error.message });
    }
  };
  
  exports.read = async (req, res) => {
    try {
      
      res.status(200).json({ status: "success", data: "Read successfully" });
    } catch (error) {
      res.status(500).json({ status: "error", error: error.message });
    }
  };
  
  exports.delete = async (req, res) => {
    try {
      
      res.status(200).json({ status: "success", data: "Deleted successfully" });
    } catch (error) {
      res.status(500).json({ status: "error", error: error.message });
    }
  };
  
  exports.update = async (req, res) => {
    try {
      
      res.status(200).json({ status: "success", data: "Updated successfully" });
    } catch (error) {
      res.status(500).json({ status: "error", error: error.message });
    }
  };
  