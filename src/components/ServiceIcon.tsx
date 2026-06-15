import React from "react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceIconProps {
  name: string;
  className?: string;
  size?: number;
}

const iconMap: Record<string, LucideIcon> = {
  Activity: Icons.Activity,
  Wrench: Icons.Wrench,
  Layers: Icons.Layers,
  Sparkles: Icons.Sparkles,
  Sun: Icons.Sun,
  Smile: Icons.Smile,
  Shield: Icons.Shield,
  AlertTriangle: Icons.AlertTriangle,
};

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = "", size }) => {
  const IconComponent = iconMap[name] ?? Icons.Activity;
  return <IconComponent className={className} size={size} />;
};

export default ServiceIcon;
