import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { User, Calendar, Users as GenderIcon, GraduationCap, Phone, Mail, MapPin, School, FileText, CheckCircle2, AlertCircle, ClipboardList } from "lucide-react";

const Registration = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    studentName: "", dob: "", gender: "", level: "",
    parentName: "", phone: "", email: "", address: "",
    previousSchool: "", notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const required = ["studentName", "dob", "gender", "level", "parentName", "phone", "email", "address"];
    const missing = required.filter((f) => !form[f as keyof typeof form].trim());
    if (missing.length > 0) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Invalid Email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    toast({ title: "Registration Submitted!", description: "Thank you! We will contact you shortly." });
    setForm({ studentName: "", dob: "", gender: "", level: "", parentName: "", phone: "", email: "", address: "", previousSchool: "", notes: "" });
  };

  const inputClass = "w-full rounded-lg border border-input bg-background px-4 py-3 pl-11 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  const labelClass = "mb-1 block font-body text-sm font-medium text-foreground";

  return (
    <>
      <section className="bg-hero py-16 md:py-24">
        <div className="container-main text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-primary-foreground md:text-5xl">Student Registration</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Start your child's journey at Bornwell Academy. Fill out the form below.
          </p>
        </div>
      </section>

      {/* Admission guidance */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="mb-10 grid gap-6 md:grid-cols-3">
            {[
              { level: "Nursery", ages: "Ages 3–5", desc: "Birth certificate and immunization records required." },
              { level: "Elementary", ages: "Ages 6–12", desc: "Previous school report card and birth certificate required." },
              { level: "Secondary", ages: "Ages 13–18", desc: "Transfer letter, report card, and birth certificate required." },
            ].map((l) => (
              <div key={l.level} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{l.level}</h3>
                <p className="text-sm font-medium text-gold">{l.ages}</p>
                <p className="mt-2 text-sm text-muted-foreground">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background">
        <div className="container-main max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <ClipboardList className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground">Registration Form</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                {/* Student Name */}
                <div>
                  <label className={labelClass}>Student Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input name="studentName" value={form.studentName} onChange={handleChange} placeholder="Full name" className={inputClass} maxLength={100} />
                  </div>
                </div>
                {/* DOB */}
                <div>
                  <label className={labelClass}>Date of Birth *</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input type="date" name="dob" value={form.dob} onChange={handleChange} className={inputClass} />
                  </div>
                </div>
                {/* Gender */}
                <div>
                  <label className={labelClass}>Gender *</label>
                  <div className="relative">
                    <GenderIcon className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <select name="gender" value={form.gender} onChange={handleChange} className={inputClass}>
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                {/* Level */}
                <div>
                  <label className={labelClass}>Applying For *</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <select name="level" value={form.level} onChange={handleChange} className={inputClass}>
                      <option value="">Select level</option>
                      <option value="nursery">Nursery</option>
                      <option value="elementary">Elementary</option>
                      <option value="secondary">Secondary</option>
                    </select>
                  </div>
                </div>
                {/* Parent Name */}
                <div>
                  <label className={labelClass}>Parent/Guardian Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input name="parentName" value={form.parentName} onChange={handleChange} placeholder="Parent/Guardian name" className={inputClass} maxLength={100} />
                  </div>
                </div>
                {/* Phone */}
                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+211 xxx xxx xxx" className={inputClass} maxLength={20} />
                  </div>
                </div>
                {/* Email */}
                <div>
                  <label className={labelClass}>Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@example.com" className={inputClass} maxLength={255} />
                  </div>
                </div>
                {/* Address */}
                <div>
                  <label className={labelClass}>Address *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input name="address" value={form.address} onChange={handleChange} placeholder="Home address" className={inputClass} maxLength={200} />
                  </div>
                </div>
              </div>

              {/* Previous School */}
              <div>
                <label className={labelClass}>Previous School (Optional)</label>
                <div className="relative">
                  <School className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                  <input name="previousSchool" value={form.previousSchool} onChange={handleChange} placeholder="Previous school name" className={inputClass} maxLength={150} />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className={labelClass}>Additional Notes (Optional)</label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                  <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Any additional information..." rows={3} className={inputClass + " resize-none"} maxLength={1000} />
                </div>
              </div>

              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-body font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:brightness-110 md:w-auto">
                <CheckCircle2 className="h-5 w-5" /> Submit Registration
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
