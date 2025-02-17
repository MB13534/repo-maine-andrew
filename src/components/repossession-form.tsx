import { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define our base schema
const baseSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  inquiryType: z.enum(["repossession", "general", "partnership"], {
    errorMap: () => ({ message: "Please select an inquiry type" }),
  }),
  // Optional by default:
  assetType: z.string().optional(),
  assetLocation: z.string().optional(),
  additionalInfo: z.string().optional(),
});

// Refine the schema so that if inquiryType is "repossession",
// both assetType and assetLocation are required.
const formSchema = baseSchema.superRefine((data, ctx) => {
  if (data.inquiryType === "repossession") {
    if (!data.assetType) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["assetType"],
        message: "Asset Type is required for repossession requests.",
      });
    }
    if (!data.assetLocation) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["assetLocation"],
        message:
          "Last Known Asset Location is required for repossession requests.",
      });
    }
  }
});

type FormValues = z.infer<typeof formSchema>;

export function RepossessionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "repossession",
      assetType: "",
      assetLocation: "",
      additionalInfo: "",
    },
  });

  // Watch the inquiryType to conditionally render asset fields
  const inquiryType = useWatch({ control: form.control, name: "inquiryType" });

  useEffect(() => {
    if (inquiryType !== "repossession") {
      form.setValue("assetType", "");
      form.setValue("assetLocation", "");
    }
  }, [inquiryType, form]);

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        setErrorMessage(
          "There was an error submitting your request. Please try again later.",
        );
        setIsSubmitting(false);
        return;
      }

      setSuccessMessage(
        "Your request was submitted successfully! We will be in touch soon.",
      );
      form.reset();
    } catch (err) {
      console.error("Error sending form:", err);
      setErrorMessage(
        "There was an error submitting your request. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    autoComplete="name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                    autoComplete="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="(555) 555-5555"
                    {...field}
                    autoComplete="tel"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Inquiry Type */}
          <FormField
            control={form.control}
            name="inquiryType"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="inquiryType">Inquiry Type</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    name={field.name}
                  >
                    <SelectTrigger id="inquiryType">
                      <SelectValue
                        placeholder={
                          <span className="text-muted-foreground">
                            Select Inquiry Type
                          </span>
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="repossession">
                        Repossession Request
                      </SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="partnership">
                        Partnership Inquiry
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Conditionally render asset-specific fields if inquiryType is repossession */}
        {inquiryType === "repossession" && (
          <>
            <FormField
              control={form.control}
              name="assetType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="assetType">Asset Type</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      name={field.name}
                    >
                      <SelectTrigger id="assetType">
                        <SelectValue
                          placeholder={
                            <span className="text-muted-foreground">
                              Select Asset Type
                            </span>
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="car">Automobile</SelectItem>
                        <SelectItem value="boat">Boat/Marine</SelectItem>
                        <SelectItem value="rv">RV/Camper</SelectItem>
                        <SelectItem value="equipment">Equipment</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="assetLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Known Asset Location</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter address or city/state"
                      {...field}
                      autoComplete="street-address"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {/* Additional Information */}
        <FormField
          control={form.control}
          name="additionalInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Information</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any special instructions, questions, or details..."
                  className="resize-none"
                  {...field}
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-600">{successMessage}</p>}

        <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
          {isSubmitting ? (
            "Submitting..."
          ) : (
            <>
              <Send className="h-4 w-4" /> Submit Inquiry
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
