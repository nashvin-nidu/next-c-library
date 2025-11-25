export interface ComponentData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  prompt: string;
  installationCode: string;
  sourceCode: string;
  dependencies: string[];
}

export const componentRegistry: Record<string, ComponentData[]> = {
  buttons: [
    {
      slug: "particle-button",
      tagline: "Kokonut UI",
      title: "Particle Button",
      description: "A little particle animation on submit",
      prompt: "",
      installationCode: "npx shadcn@latest add https://21st.dev/r/kokonutd/particle-button",
      sourceCode: `import { ParticleButton } from "@/components/ui/particle-button"
                    import { Button } from "@/components/ui/button"
                    import { LucideIcon } from "lucide-react"

                    function ParticleButtonDemo() {
                        return (
                            <ParticleButton successDuration={1000} variant="default">
                                Click me!
                            </ParticleButton>
                        )
                    }

                    export { ParticleButtonDemo }`,
      dependencies: ["lucide-react", "framer-motion"]
    },
    {
      slug: "neon-button",
      tagline: "Gaz",
      title: "Neon Button",
      description: "a simple and clean neon bordered button with hover effect",
      prompt: "",
      installationCode: "npx shadcn@latest add https://21st.dev/r/cybergaz/neon-button",
      sourceCode: `import { Button } from "@/components/ui/neon-button"


                    const Default = () => {
                        return (
                            <>
                                <div className="flex flex-col gap-3">
                                    <Button>Button</Button>
                                    <WithNoNeon />
                                    <Solid />
                                </div>
                            </>
                        )
                    }

                    const WithNoNeon = () => {
                        return (
                            <>
                                <div className="flex flex-col gap-2">
                                    <Button neon={false}>normal button</Button>
                                </div>
                            </>
                        )
                    }

                    const Solid = () => {
                        return (
                            <>
                                <div className="flex flex-col gap-2">
                                    <Button variant={"solid"}>solid</Button>
                                </div>
                            </>
                        )
                    }

                    export { Default, WithNoNeon, Solid }`,
      dependencies: ["class-variance-authority"]
    },
    {
      slug: "shimmer-button",
      tagline: "Magic Ui",
      title: "Shimmer Button",
      description: "A button with a shimmering light which travels around the perimeter.",
      prompt: ``,
      installationCode: "npx shadcn@latest add https://21st.dev/r/dillionverma/shimmer-button",
      sourceCode: `import { ShimmerButton } from "@/components/ui/shimmer-button"

                    function ShimmerButtonDemo() {
                      return (
                        <div className="z-10 flex min-h-64 items-center justify-center">
                          <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                              Shimmer Button
                            </span>
                          </ShimmerButton>
                        </div>
                      );
                    }

                    export default { ShimmerButtonDemo };
                    import { ShimmerButton } from "@/components/ui/shimmer-button"

                    function ShimmerButtonDemo() {
                      return (
                        <div className="z-10 flex min-h-64 items-center justify-center">
                          <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                              Shimmer Button
                            </span>
                          </ShimmerButton>
                        </div>
                      );
                    }

                    export default { ShimmerButtonDemo };
`,
      dependencies: []
    },
    {
      slug: "previous-next-button-group",
      tagline: "Prism Ui",
      title: "Previous & Next Button Group",
      description: "A versatile button group component for organizing related actions with consistent spacing and visual connection.",
      prompt: "npx shadcn@latest add button",
      installationCode: "npx shadcn@latest add https://21st.dev/r/Codehagen/previous-next-button-group",
      sourceCode: `import { ButtonGroupBasic } from "@/components/ui/previous-next-button-group"

                    function ButtonGroup() {
                      return (
                        <div className="block">
                          <ButtonGroupBasic />
                        </div>
                      );
                    }

                    export { ButtonGroup };
`,
      dependencies: ["Motion"]
    }
  ],
  navbar: [
    {
      slug: "dock",
      tagline: "Motion Primitives",
      title: "Dock",
      description: "A versatile UI element that provides a flexible and customizable way to organize and display menu items within your application.",
      prompt: `You are given a task to integrate an existing React component in the codebase

      The codebase should support:
      - shadcn project structure  
      - Tailwind CSS
      - Typescript

      If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

      Determine the default path for components and styles. If default path for components is not /components/ui, provide instructions on why it's important to create this folder

      Copy-paste this component to /components/ui folder:

      \`\`\`tsx
      dock.tsx

      'use client';

      import {
        motion,
        MotionValue,
        useMotionValue,
        useSpring,
        useTransform,
        type SpringOptions,
        AnimatePresence,
      } from 'framer-motion';
      import {
        Children,
        cloneElement,
        createContext,
        useContext,
        useEffect,
        useMemo,
        useRef,
        useState,
      } from 'react';
      import { cn } from '@/lib/utils';

      const DOCK_HEIGHT = 128;
      const DEFAULT_MAGNIFICATION = 80;
      const DEFAULT_DISTANCE = 150;
      const DEFAULT_PANEL_HEIGHT = 64;

      type DockProps = {
        children: React.ReactNode;
        className?: string;
        distance?: number;
        panelHeight?: number;
        magnification?: number;
        spring?: SpringOptions;
      };

      type DockItemProps = {
        className?: string;
        children: React.ReactNode;
      };

      type DockLabelProps = {
        className?: string;
        children: React.ReactNode;
      };

      type DockIconProps = {
        className?: string;
        children: React.ReactNode;
      };

      type DocContextType = {
        mouseX: MotionValue;
        spring: SpringOptions;
        magnification: number;
        distance: number;
      };

      type DockProviderProps = {
        children: React.ReactNode;
        value: DocContextType;
      };

      const DockContext = createContext<DocContextType | undefined>(undefined);

      function DockProvider({ children, value }: DockProviderProps) {
        return <DockContext.Provider value={value}>{children}</DockContext.Provider>;
      }

      function useDock() {
        const context = useContext(DockContext);
        if (!context) {
          throw new Error('useDock must be used within an DockProvider');
        }
        return context;
      }

      function Dock({
        children,
        className,
        spring = { mass: 0.1, stiffness: 150, damping: 12 },
        magnification = DEFAULT_MAGNIFICATION,
        distance = DEFAULT_DISTANCE,
        panelHeight = DEFAULT_PANEL_HEIGHT,
      }: DockProps) {
        const mouseX = useMotionValue(Infinity);
        const isHovered = useMotionValue(0);

        const maxHeight = useMemo(() => {
          return Math.max(DOCK_HEIGHT, magnification + magnification / 2 + 4);
        }, [magnification]);

        const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
        const height = useSpring(heightRow, spring);

        return (
          <motion.div
            style={{
              height: height,
              scrollbarWidth: 'none',
            }}
            className='mx-2 flex max-w-full items-end overflow-x-auto'
          >
            <motion.div
              onMouseMove={({ pageX }) => {
                isHovered.set(1);
                mouseX.set(pageX);
              }}
              onMouseLeave={() => {
                isHovered.set(0);
                mouseX.set(Infinity);
              }}
              className={cn(
                'mx-auto flex w-fit gap-4 rounded-2xl bg-gray-50 px-4 dark:bg-neutral-900',
                className
              )}
              style={{ height: panelHeight }}
              role='toolbar'
              aria-label='Application dock'
            >
              <DockProvider value={{ mouseX, spring, distance, magnification }}>
                {children}
              </DockProvider>
            </motion.div>
          </motion.div>
        );
      }

      function DockItem({ children, className }: DockItemProps) {
        const ref = useRef<HTMLDivElement>(null);
        const { distance, magnification, mouseX, spring } = useDock();
        const isHovered = useMotionValue(0);

        const mouseDistance = useTransform(mouseX, (val) => {
          const domRect = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
          return val - domRect.x - domRect.width / 2;
        });

        const widthTransform = useTransform(
          mouseDistance,
          [-distance, 0, distance],
          [40, magnification, 40]
        );

        const width = useSpring(widthTransform, spring);

        return (
          <motion.div
            ref={ref}
            style={{ width }}
            onHoverStart={() => isHovered.set(1)}
            onHoverEnd={() => isHovered.set(0)}
            onFocus={() => isHovered.set(1)}
            onBlur={() => isHovered.set(0)}
            className={cn(
              'relative inline-flex items-center justify-center',
              className
            )}
            tabIndex={0}
            role='button'
            aria-haspopup='true'
          >
            {Children.map(children, (child) =>
              cloneElement(child as React.ReactElement, { width, isHovered })
            )}
          </motion.div>
        );
      }

      function DockLabel({ children, className, ...rest }: DockLabelProps) {
        const restProps = rest as Record<string, unknown>;
        const isHovered = restProps['isHovered'] as MotionValue<number>;
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
          const unsubscribe = isHovered.on('change', (latest) => {
            setIsVisible(latest === 1);
          });
          return () => unsubscribe();
        }, [isHovered]);

        return (
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -10 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  'absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white',
                  className
                )}
                role='tooltip'
                style={{ x: '-50%' }}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        );
      }

      function DockIcon({ children, className, ...rest }: DockIconProps) {
        const restProps = rest as Record<string, unknown>;
        const width = restProps['width'] as MotionValue<number>;
        const widthTransform = useTransform(width, (val) => val / 2);

        return (
          <motion.div
            style={{ width: widthTransform }}
            className={cn('flex items-center justify-center', className)}
          >
            {children}
          </motion.div>
        );
      }

      export { Dock, DockIcon, DockItem, DockLabel };

      demo.tsx

      import {
        Activity,
        Component,
        HomeIcon,
        Mail,
        Package,
        ScrollText,
        SunMoon,
      } from 'lucide-react';
      import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

      const data = [
        {
          title: 'Home',
          icon: (
            <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
          ),
          href: '#',
        },
        {
          title: 'Products',
          icon: (
            <Package className='h-full w-full text-neutral-600 dark:text-neutral-300' />
          ),
          href: '#',
        },
        {
          title: 'Components',
          icon: (
            <Component className='h-full w-full text-neutral-600 dark:text-neutral-300' />
          ),
          href: '#',
        },
        {
          title: 'Activity',
          icon: (
            <Activity className='h-full w-full text-neutral-600 dark:text-neutral-300' />
          ),
          href: '#',
        },
        {
          title: 'Change Log',
          icon: (
            <ScrollText className='h-full w-full text-neutral-600 dark:text-neutral-300' />
          ),
          href: '#',
        },
        {
          title: 'Email',
          icon: (
            <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />
          ),
          href: '#',
        },
        {
          title: 'Theme',
          icon: (
            <SunMoon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
          ),
          href: '#',
        },
      ];

      export function AppleStyleDock() {
        return (
          <div className='absolute bottom-2 left-1/2 max-w-full -translate-x-1/2'>
            <Dock className='items-end pb-3'>
              {data.map((item, idx) => (
                <DockItem
                  key={idx}
                  className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
                >
                  <DockLabel>{item.title}</DockLabel>
                  <DockIcon>{item.icon}</DockIcon>
                </DockItem>
              ))}
            </Dock>
          </div>
        );
      }
      \`\`\`

      Install NPM dependencies:

      \`\`\`bash
      framer-motion
      \`\`\`

      Implementation Guidelines

      1. Analyze the component structure and identify all required dependencies
      2. Review the component's argumens and state
      3. Identify any required context providers or hooks and install them
      4. Questions to Ask
        - What data/props will be passed to this component?
        - Are there any specific state management requirements?
        - Are there any required assets (images, icons, etc.)?
        - What is the expected responsive behavior?
        - What is the best place to use this component in the app?

      Steps to integrate

      0. Copy paste all the code above in the correct directories
      1. Install external dependencies
      2. Fill image assets with Unsplash stock images you know exist
      3. Use lucide-react icons for svgs or logos if component requires them`,
      installationCode: "npx shadcn@latest add https://21st.dev/r/ibelick/dock",
      sourceCode: `import {
                      Activity,
                      Component,
                      HomeIcon,
                      Mail,
                      Package,
                      ScrollText,
                      SunMoon,
                    } from 'lucide-react';

                    import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

                    const data = [
                      {
                        title: 'Home',
                        icon: (
                          <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
                        ),
                        href: '#',
                      },
                      {
                        title: 'Products',
                        icon: (
                          <Package className='h-full w-full text-neutral-600 dark:text-neutral-300' />
                        ),
                        href: '#',
                      },
                      {
                        title: 'Components',
                        icon: (
                          <Component className='h-full w-full text-neutral-600 dark:text-neutral-300' />
                        ),
                        href: '#',
                      },
                      {
                        title: 'Activity',
                        icon: (
                          <Activity className='h-full w-full text-neutral-600 dark:text-neutral-300' />
                        ),
                        href: '#',
                      },
                      {
                        title: 'Change Log',
                        icon: (
                          <ScrollText className='h-full w-full text-neutral-600 dark:text-neutral-300' />
                        ),
                        href: '#',
                      },
                      {
                        title: 'Email',
                        icon: (
                          <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />
                        ),
                        href: '#',
                      },
                      {
                        title: 'Theme',
                        icon: (
                          <SunMoon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
                        ),
                        href: '#',
                      },
                    ];

                    export function AppleStyleDock() {
                      return (
                        <div className='absolute bottom-2 left-1/2 max-w-full -translate-x-1/2'>
                          <Dock className='items-end pb-3'>
                            {data.map((item, idx) => (
                              <DockItem
                                key={idx}
                                className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
                              >
                                <DockLabel>{item.title}</DockLabel>
                                <DockIcon>{item.icon}</DockIcon>
                              </DockItem>
                            ))}
                          </Dock>
                        </div>
                      );
                    }
                    `,
      dependencies: ["framer-motion", "lucide-react"]
    },
    {
      slug: "fluid-menu",
      tagline: "Personal UI",
      title: "Fluid",
      description: "A fluid circular menu that elegantly expands to reveal navigation items with smooth icon transitions",
      prompt: "npx shadcn@latest add navigation-menu",
      installationCode: "npx shadcn@latest add https://21st.dev/r/deepaksslibra/fluid-menu",
      sourceCode: `"use client"

      import { MenuItem, MenuContainer } from "@/components/ui/fluid-menu"
      import { Menu as MenuIcon, X, Home, Mail, User, Settings } from "lucide-react"

      // A fluid circular menu that elegantly expands to reveal navigation items with smooth icon transitions
      export function MenuDemo() {
        return (
          <div className="flex flex-col items-center gap-8 p-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100/80 dark:to-gray-100">Fluid Navigation</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">A fluid circular menu with smooth transitions</p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-transparent dark:from-gray-100/10 blur-3xl -z-10 rounded-full" />
              <MenuContainer>
                <MenuItem 
                  icon={
                    <div className="relative w-6 h-6">
                      <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-100 scale-100 rotate-0 [div[data-expanded=true]_&]:opacity-0 [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180">
                        <MenuIcon size={24} strokeWidth={1.5} />
                      </div>
                      <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-0 scale-0 -rotate-180 [div[data-expanded=true]_&]:opacity-100 [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0">
                        <X size={24} strokeWidth={1.5} />
                      </div>
                    </div>
                  } 
                />
                <MenuItem icon={<Home size={24} strokeWidth={1.5} />} />
                <MenuItem icon={<Mail size={24} strokeWidth={1.5} />} />
                <MenuItem icon={<User size={24} strokeWidth={1.5} />} />
                <MenuItem icon={<Settings size={24} strokeWidth={1.5} />} />
              </MenuContainer>
            </div>
          </div>
        )
      }  `,
      dependencies: ["lucide-react"]
    },
    {
      slug: "button-preview",
      tagline: "Magic Ui",
      title: "Fixed Navbar",
      description: "A fixed position navigation bar component",
      prompt: "npx shadcn@latest add navigation-menu",
      installationCode: "",
      sourceCode: `// Add your navbar code here`,
      dependencies: []
    }
  ],
  carousel: [
    {
      slug: "button-preview",
      tagline: "Magic Ui",
      title: "Image Carousel",
      description: "An image carousel component",
      prompt: "npx shadcn@latest add carousel",
      installationCode: "",
      sourceCode: `// Add your carousel code here`,
      dependencies: []
    },
    {
      slug: "button-preview",
      tagline: "Magic Ui",
      title: "Auto Carousel",
      description: "An auto-playing carousel component",
      prompt: "npx shadcn@latest add carousel",
      installationCode: "",
      sourceCode: `// Add your carousel code here`,
      dependencies: []
    },
    {
      slug: "button-preview",
      tagline: "Magic Ui",
      title: "3D Carousel",
      description: "A 3D carousel component",
      prompt: "npx shadcn@latest add carousel",
      installationCode: "",
      sourceCode: `// Add your carousel code here`,
      dependencies: []
    }
  ]
};

export function getComponentData(slug: string): ComponentData | null {
  for (const category of Object.values(componentRegistry)) {
    const component = category.find(c => c.slug === slug);
    if (component) return component;
  }
  return null;
}
