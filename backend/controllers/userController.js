import Appointment from "../models/Appointment.js";

const getUserAppointments = async (req, res) => {
  const { user } = req.params;

  const role = "user";

  if (user !== req.user._id.toString() && role !== "admin") {
    const error = new Error("Acceso denegado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const query = req.user.admin ? { date: { $gte: new Date() } } : { user, date: { $gte: new Date() } };
    const appointments = await Appointment.find(query)
      .populate("services")
      .populate({path: 'user', select: 'name email'})
      .sort({ date: "asc" });
    res.json(appointments);
  } catch (error) {
    console.log(error);
  }
};

export { getUserAppointments };
