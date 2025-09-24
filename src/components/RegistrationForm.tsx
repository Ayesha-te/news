import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",      // ✅ backend expects this
    phone: "",
    email: "",
    city: "",
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.country) newErrors.country = "Country is required";

    if (formData.country === "pakistan" && !formData.city.trim()) {
      newErrors.city = "City is required for Pakistan";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const res = await fetch("http://localhost:3000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          alert("Form submitted successfully!");
          setFormData({
            name: "",
            phone: "",
            email: "",
            city: "",
            country: "",
            message: "",
          });
        } else {
          const data = await res.json();
          alert(data.error || "Something went wrong!");
        }
      } catch (err) {
        console.error(err);
        alert("Failed to connect to server.");
      }
    }
  };

  return (
    <section id="register" className="py-20 bg-slate-100 scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-12">
          Register Your Interest
        </h2>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Full Name & Phone */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg text-primary font-medium">
                Full name *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="bg-transparent border-primary/30 border-b-2 border-t-0 border-x-0 rounded-none"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-lg text-primary font-medium">
                Phone No. *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="bg-transparent border-primary/30 border-b-2 border-t-0 border-x-0 rounded-none"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg text-primary font-medium">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="bg-transparent border-primary/30 border-b-2 border-t-0 border-x-0 rounded-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Country */}
          <div className="space-y-2">
            <Label htmlFor="country" className="text-lg text-primary font-medium">
              Country *
            </Label>
            <Select onValueChange={(value) => handleChange("country", value)} value={formData.country}>
              <SelectTrigger className="bg-transparent border-primary/30 border-b-2 border-t-0 border-x-0 rounded-none text-black">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border text-white">
                <SelectItem value="pakistan">Pakistan</SelectItem>
                <SelectItem value="uae">UAE</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="spain">Spain</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
              </SelectContent>
            </Select>
            {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
          </div>

          {/* City (Only if Pakistan) */}
          {formData.country === "pakistan" && (
            <div className="space-y-2">
              <Label htmlFor="city" className="text-lg text-primary font-medium">
                City *
              </Label>
              <Input
                id="city"
                type="text"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="bg-transparent border-primary/30 border-b-2 border-t-0 border-x-0 rounded-none"
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>
          )}

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-lg text-primary font-medium">
              Message *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="bg-transparent border-primary/30 border-b-2 border-t-0 border-x-0 rounded-none min-h-[100px] resize-none"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <Button
              type="submit"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-medium shadow-gold"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
