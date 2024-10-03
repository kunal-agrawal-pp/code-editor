import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu as UIDropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenu({ triggerElement, menuLabel, isMenuLabelIsElement, menuItems }) {
  return (
    <UIDropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* If triggerElement is provided, use it; otherwise, use a Button with the menuLabel */}
        {triggerElement ? (
          triggerElement
        ) : (
          <Button variant="outline">{menuLabel}</Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mx-[1rem] bg-white">
        {/* Render menuLabel as an element if isMenuLabelIsElement is true, otherwise as a label */}
        {isMenuLabelIsElement ? (
          <>{menuLabel}</>
        ) : (
          <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>
        )}
        <DropdownMenuSeparator />
        {menuItems.map((item, index) =>
          item.subItems ? (
            <DropdownMenuSub key={index}>
              <DropdownMenuSubTrigger>
                {item.icon && <span className="mr-2">{item.icon}</span>}
                <span>{item.label}</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="mx-[0.5rem] bg-white">
                  {item.subItems.map((subItem, subIndex) => (
                    <DropdownMenuItem
                      key={subIndex}
                      onClick={subItem.onClick}
                      disabled={subItem.disabled}
                      className="dropdown-item"
                    >
                      {subItem.icon && <span className="mr-2">{subItem.icon}</span>}
                      <span>{subItem.label}</span>
                      {subItem.shortcut && (
                        <DropdownMenuShortcut>{subItem.shortcut}</DropdownMenuShortcut>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          ) : (
            <DropdownMenuItem
              key={index}
              onClick={item.onClick}
              disabled={item.disabled}
              className="dropdown-item"
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              <span>{item.label}</span>
              {item.shortcut && (
                <DropdownMenuShortcut
                >{item.shortcut}</DropdownMenuShortcut>
              )}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </UIDropdownMenu>
  );
}
