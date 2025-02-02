'use client'

import React from 'react'
import { Info } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/tooltip"
import { cn } from "@/utils"

interface InfoIconProps {
  content: React.ReactNode
  position?: 'top' | 'right' | 'bottom' | 'left'
  className?: string
}

export function InfoIcon({ content, position = 'top', className = '' }: InfoIconProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger>
          <Info className={cn("size-3", className)} />
        </TooltipTrigger>
        <TooltipContent side={position} className="max-w-48 sm:max-w-xs mb-3">
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

