import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const RegistrationForm = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-12">
          Register Your Interest
        </h2>
        
        <form className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-lg text-primary font-medium">
                Full name *
              </Label>
              <Input 
                id="fullName"
                type="text"
                className="bg-transparent border-primary/30 border-b-2 border-t-0 border-x-0 rounded-none text-foreground placeholder:text-muted-foreground focus:border-primary"
                placeholder=""
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-lg text-primary font-medium">
                Phone No. *
              </Label>
              <Input 
                id="phone"
                type="tel"
                className="bg-transparent border-primary/30 border-b-2 border-t-0 border-x-0 rounded-none text-foreground placeholder:text-muted-foreground focus:border-primary"
                placeholder=""
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg text-primary font-medium">
              Email Address *
            </Label>
            <Input 
              id="email"
              type="email"
              className="bg-transparent border-primary/30 border-b-2 border-t-0 border-x-0 rounded-none text-foreground placeholder:text-muted-foreground focus:border-primary"
              placeholder=""
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="text-lg text-primary font-medium">
              City *
            </Label>
            <Input 
              id="city"
              type="text"
              className="bg-transparent border-primary/30 border-b-2 border-t-0 border-x-0 rounded-none text-foreground placeholder:text-muted-foreground focus:border-primary"
              placeholder=""
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country" className="text-lg text-primary font-medium">
              Country
            </Label>
            <Select>
              <SelectTrigger className="bg-transparent border-primary/30 border-b-2 border-t-0 border-x-0 rounded-none text-foreground">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="pakistan">Pakistan</SelectItem>
                <SelectItem value="uae">UAE</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-lg text-primary font-medium">
              Message
            </Label>
            <Textarea 
              id="message"
              className="bg-transparent border-primary/30 border-b-2 border-t-0 border-x-0 rounded-none text-foreground placeholder:text-muted-foreground focus:border-primary min-h-[100px] resize-none"
              placeholder=""
            />
          </div>

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