
import React from 'react';
import { 
  Bed, 
  Wifi, 
  Waves as WashingMachine, 
  Refrigerator, 
  Flame, 
  Droplets, 
  Thermometer, 
  ShieldCheck, 
  Cctv, 
  Car, 
  Clock, 
  Sparkles 
} from 'lucide-react';
import { Amenity, RoomType, FAQItem, GalleryImage } from './types';

export const PROPERTY_INFO = {
  name: "Shree Ganesh Residency",
  location: "Kharghar, Belpada, Navi Mumbai",
  owner: "Marshal Enterprises",
  contact: "+91 92846 64533",
  whatsapp: "919284664533",
  email: "shriganeshrecidency@gmail.com"
};

export const AMENITIES: Amenity[] = [
  { icon: <Bed className="w-6 h-6" />, label: "Fully Furnished Rooms" },
  { icon: <Wifi className="w-6 h-6" />, label: "WiFi Included" },
  { icon: <WashingMachine className="w-6 h-6" />, label: "Washing Machine" },
  { icon: <Refrigerator className="w-6 h-6" />, label: "Refrigerator" },
  { icon: <Flame className="w-6 h-6" />, label: "Gas Connection" },
  { icon: <Droplets className="w-6 h-6" />, label: "Water Purifier" },
  { icon: <Thermometer className="w-6 h-6" />, label: "Geyser" },
  { icon: <Sparkles className="w-6 h-6" />, label: "Alternate Day Cleaning" },
  { icon: <Cctv className="w-6 h-6" />, label: "CCTV Surveillance" },
  { icon: <ShieldCheck className="w-6 h-6" />, label: "Security Guard" },
  { icon: <Car className="w-6 h-6" />, label: "Parking Available" },
  { icon: <Clock className="w-6 h-6" />, label: "24/7 Access" }
];

export const ROOM_TYPES: RoomType[] = [
  {
    title: "Hall Space",
    price: 7000,
    description: "Spacious shared living area with basic furnishing.",
    imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
    features: ["Bed with Mattress", "Locker Access", "Common Area"]
  },
  {
    title: "Private Bedroom",
    price: 7500,
    description: "Personal bedroom for focused study or work.",
    imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800",
    features: ["Private Bed", "Study Table", "Ventilation"]
  },
  {
    title: "Attached Washroom Room",
    price: 8000,
    description: "Premium privacy with personal bathroom facility.",
    imageUrl: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=800",
    features: ["Private Bathroom", "Maximum Privacy", "Airy Design"]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Is the security deposit refundable?",
    answer: "Yes, the 1-month rent security deposit is fully refundable at the time of move-out, subject to any maintenance deductions if applicable."
  },
  {
    question: "Is WiFi included in the monthly rent?",
    answer: "Yes, high-speed WiFi is included in the monthly rent package for all residents."
  },
  {
    question: "How are electricity charges handled?",
    answer: "Electricity bills are shared among the residents of the unit based on actual consumption recorded by the meter."
  },
  {
    question: "What is the visitor policy?",
    answer: "Day visitors are allowed with prior notice. Overnight stays for guests require special permission from the management to ensure security."
  },
  {
    question: "How often is the cleaning done?",
    answer: "Cleaning of common areas and rooms is conducted every alternate day to maintain high standards of hygiene."
  }
];

export const GALLERY: GalleryImage[] = [
  { url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800", caption: "Cozy Interior" },
  { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800", caption: "Modern Washroom" },
  { url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800", caption: "Building Exterior" },
  { url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800", caption: "Shared Kitchen" },
  { url: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800", caption: "Parking Space" },
  { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", caption: "Security Post" }
];
