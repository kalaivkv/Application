import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, TextField, Button, Typography, Box, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required";
    tempErrors.email = formData.email ? (/^.+@.+\..+$/.test(formData.email) ? "" : "Invalid email") : "Email is required";
    tempErrors.phone = formData.phone ? (/^\d{10}$/.test(formData.phone) ? "" : "phone number must be 10 digits") : "Phone number is required";
    tempErrors.address = formData.address ? "" : "Address is required";
    tempErrors.city = formData.city ? "" : "City is required";
    tempErrors.username = formData.username ? "" : "Username is required";
    tempErrors.password = formData.password ? (formData.password.length >= 6 ? "" : "Password must be at least 6 characters") : "Password is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data Submitted:", formData);
      setFormData({ name: "", email: "", phone: "", address: "", city: "", username: "", password: "" });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, p: 4, borderRadius: 3, boxShadow: 4, backgroundColor: "#ffffff", border: "1px solid #ddd" }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2" }}>
        Registration Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Accordion sx={{ mb: 2, borderRadius: 2, boxShadow: 3, backgroundColor: "#f0f8ff" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>Personal Info</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} margin="dense" error={!!errors.name} helperText={errors.name} />
            <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} margin="dense" error={!!errors.email} helperText={errors.email} />
            <TextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} margin="dense" error={!!errors.phone} helperText={errors.phone} />
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 2, borderRadius: 2, boxShadow: 3, backgroundColor: "#f0f8ff", "&:before": { display: "none" } }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>Address</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField fullWidth label="Address" name="address" value={formData.address} onChange={handleChange} margin="dense" error={!!errors.address} helperText={errors.address} />
            <TextField fullWidth label="City" name="city" value={formData.city} onChange={handleChange} margin="dense" error={!!errors.city} helperText={errors.city} />
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 2, borderRadius: 2, boxShadow: 3, backgroundColor: "#f0f8ff", "&:before": { display: "none" } }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>Account Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField fullWidth label="Username" name="username" value={formData.username} onChange={handleChange} margin="dense" error={!!errors.username} helperText={errors.username} />
            <TextField fullWidth type="password" label="Password" name="password" value={formData.password} onChange={handleChange} margin="dense" error={!!errors.password} helperText={errors.password} />
          </AccordionDetails>
        </Accordion>

        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button type="submit" variant="contained" color="primary" sx={{ borderRadius: 3, px: 5, py: 1.5, fontSize: "1rem" }}>
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default AccordionForm;