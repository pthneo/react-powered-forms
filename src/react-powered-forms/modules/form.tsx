"use client"

import { FormProvider } from "./form-context";
import { Blueprint, FormIOField, FormMetadata, ViewerStyles } from "./types";
import { cn } from "./utils";
import React, { Component, ReactElement, ReactNode, useState } from "react";
import ErrorBoundary from "./error-boundary";

export type FormProps = {
  styles: ViewerStyles;
  blueprint?: Blueprint
  onSubmit?: (input: any) => void;
}

// Example
// const id = 1
// const blueprint = await db.select(forms.blueprint: blueprint).from(forms).where(eq(forms.id, id));
// const formValidation = getSchema(blueprint.schema);
// const formType = z.infer<typeof formValidation>;

const Form = ({styles, blueprint, onSubmit}: FormProps): React.JSX.Element => {
  const [loading, setLoading] = useState(true);

  // Check if provided blueprint is valid (use Zod)
  // Attempt to load the form metadata
  // Attempt to load the form schema
  // Create the jsx with form components, react-hook-form, zod schema
  // Attempt to render the form
  // If successful, set loading to false

  const form = useForm<CampaignData>({
    resolver: zodResolver(campaignSchema),
    defaultValues: {
      title: "",
      description: "",
      image: undefined,
      universe: "",
      ruleset: ""
    }
  });

  return loading ? <Loading /> : (
      <div className="grid w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter campaign title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Enter campaign description" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
              <div className="rounded-xl border bg-black col-span-1 flex items-center justify-center">
                {preview ? (
                  <div className="relative">
                    <Image
                      src={preview}
                      alt="Image preview"
                      className="h-48 w-full rounded-lg object-cover"
                    />
                  </div>
                ) : (
                  <p className="text-muted-foreground">No image selected</p>
                )}
              </div>
              <div className="col-span-2 flex space-y-6 flex-col">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field: { onChange, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".jpeg,.png,.webp"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            onChange(file);
                          }}
                          {...rest}
                        />
                      </FormControl>
                      <FormDescription>
                        Uploaded images must be smaller than 3MB and in either .jpeg, .png or .webp
                        format.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
  
                {/* Universe (Dropdown) */}
                <FormField
                  control={form.control}
                  name="universe"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Universe</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a universe" />
                          </SelectTrigger>
                          <SelectContent>
                            {universes.map((universe) => (
                              <SelectItem key={universe.id} value={universe.id}>
                                {universe.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
  
                {/* Ruleset (Dropdown) */}
                <FormField
                  control={form.control}
                  name="ruleset"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ruleset</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a ruleset" />
                          </SelectTrigger>
                          <SelectContent>
                            {rulesets.map((ruleset) => (
                              <SelectItem key={ruleset.id} value={ruleset.id}>
                                {ruleset.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            {/* Image Upload */}
  
            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? "Saving..." : "Save Campaign"}
            </Button>
            {result.serverError && (
              <p className="text-center text-sm font-medium text-red-500">{result.serverError}</p>
            )}
          </form>
        </Form>
      </div>)}
  )
}


export default Form;