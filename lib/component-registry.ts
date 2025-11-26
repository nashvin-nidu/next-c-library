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
      tagline: "Personals UI",
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
      slug: "bottom-menu",
      tagline: "Personals UI",
      title: "Bottom Menu",
      description: `original by @raunofreiberg icons by @nucleoicons`,
      prompt: "",
      installationCode: "npx shadcn@latest add https://21st.dev/r/yadwinder/bottom-menu",
      sourceCode: `import { MenuBar } from "@/components/ui/bottom-menu"

                    const menuItems = [
                      {
                        icon: (props: React.SVGProps<SVGSVGElement>) => (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
                            <title>msg</title>
                            <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor">
                              <path d="M9,1.75C4.996,1.75,1.75,4.996,1.75,9c0,1.319,.358,2.552,.973,3.617,.43,.806-.053,2.712-.973,3.633,1.25,.068,2.897-.497,3.633-.973,.489,.282,1.264,.656,2.279,.848,.433,.082,.881,.125,1.338,.125,4.004,0,7.25-3.246,7.25-7.25S13.004,1.75,9,1.75Z" />
                            </g>
                          </svg>
                        ),
                        label: "Messages"
                      },
                      {
                        icon: (props: React.SVGProps<SVGSVGElement>) => (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
                            <title>envelope</title>
                            <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor">
                              <path d="M1.75,5.75l6.767,3.733c.301,.166,.665,.166,.966,0l6.767-3.733" />
                              <rect x="1.75" y="3.25" width="14.5" height="11.5" rx="2" ry="2" transform="translate(18 18) rotate(180)" />
                            </g>
                          </svg>
                        ),
                        label: "Mail"
                      },
                      {
                        icon: (props: React.SVGProps<SVGSVGElement>) => (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
                            <title>hashtag</title>
                            <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor">
                              <line x1="3.75" y1="6.25" x2="15.25" y2="6.25" />
                              <line x1="2.75" y1="11.75" x2="14.25" y2="11.75" />
                              <line x1="7.633" y1="2.75" x2="5.289" y2="15.25" />
                              <line x1="12.711" y1="2.75" x2="10.367" y2="15.25" />
                            </g>
                          </svg>
                        ),
                        label: "Explore"
                      },
                      {
                        icon: (props: React.SVGProps<SVGSVGElement>) => (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
                            <title>upload-4</title>
                            <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor">
                              <path d="M15.25,11.75v1.5c0,1.105-.895,2-2,2H4.75c-1.105,0-2-.895-2-2v-1.5" />
                              <polyline points="12.5 6.25 9 2.75 5.5 6.25" />
                              <line x1="9" y1="2.75" x2="9" y2="10.25" />
                            </g>
                          </svg>
                        ),
                        label: "Share"
                      },
                      {
                        icon: (props: React.SVGProps<SVGSVGElement>) => (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
                            <title>feather-plus</title>
                            <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor">
                              <path d="M13.974,9.731c-.474,3.691-3.724,4.113-6.974,3.519" />
                              <path d="M3.75,16.25S5.062,4.729,16.25,3.75c-.56,.976-.573,2.605-.946,4.239-.524,2.011-2.335,2.261-4.554,2.261" />
                              <line x1="4.25" y1="1.75" x2="4.25" y2="6.75" />
                              <line x1="6.75" y1="4.25" x2="1.75" y2="4.25" />
                            </g>
                          </svg>
                        ),
                        label: "Write"
                      },
                      {
                        icon: (props: React.SVGProps<SVGSVGElement>) => (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
                            <title>menu</title>
                            <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor">
                              <line x1="2.25" y1="9" x2="15.75" y2="9" />
                              <line x1="2.25" y1="3.75" x2="15.75" y2="3.75" />
                              <line x1="2.25" y1="14.25" x2="15.75" y2="14.25" />
                            </g>
                          </svg>
                        ),
                        label: "Menu"
                      }
                    ]

                    function MenuBarDemo() {
                      return (
                        <div className="flex items-center justify-center p-6">
                          <MenuBar items={menuItems} />
                        </div>
                      )
                    }

                    export { MenuBarDemo }`,
      dependencies: ["framer-motion"]
    },
    {
      slug: "navbar-one",
      tagline: "Geekles007",
      title: "NavBar",
      description: `Navbar with hover animation effect`,
      prompt: "",
      installationCode: "npx shadcn@latest add https://21st.dev/r/geekles007/navbar",
      sourceCode: `import NavBar from "@/components/ui/navbar"

                    const menus = [
                      {
                        id: 1,
                        title: 'Home',
                        url: '/',
                        dropdown: false,
                      },
                      {
                        id: 2,
                        title: 'Products',
                        url: '/products',
                        dropdown: true,
                        items: [
                          {
                            id: 21,
                            title: 'Electronics',
                            url: '/products/electronics',
                          },
                          {
                            id: 22,
                            title: 'Clothing',
                            url: '/products/clothing',
                          },
                          {
                            id: 23,
                            title: 'Accessories',
                            url: '/products/accessories',
                          },
                        ],
                      },
                      {
                        id: 3,
                        title: 'Services',
                        url: '/services',
                        dropdown: true,
                        items: [
                          {
                            id: 31,
                            title: 'Consulting',
                            url: '/services/consulting',
                          },
                          {
                            id: 32,
                            title: 'Support',
                            url: '/services/support',
                          },
                        ],
                      },
                      {
                        id: 4,
                        title: 'About Us',
                        url: '/about',
                        dropdown: false,
                      },
                      {
                        id: 5,
                        title: 'Contact',
                        url: '/contact',
                        dropdown: false,
                      },
                    ];

                    export function NavBarDemo() {
                      return <NavBar list={menus} />
                    }`,
      dependencies: ["framer-motion"]
    }
  ],
  carousel: [
    {
      slug: "feature-with-image-carousel",
      tagline: "Tommy Jepsen",
      title: "Feature with Image Carousel",
      description: "Feature block with Image Carousel",
      prompt: "npx shadcn@latest add carousel",
      installationCode: "npx shadcn@latest add https://21st.dev/r/tommyjepsen/feature-with-image-carousel",
      sourceCode: `import { Feature } from "@/components/ui/feature-with-image-carousel";

                    function FeatureDemo() {
                      return (
                        <div className="w-full">
                          <Feature />
                        </div>
                      );
                    }

                    export { FeatureDemo };`,
      dependencies: ["CSS"]
    },
    {
      slug: "profile-card-testimonial-carousel",
      tagline: "Tommy Jepsen",
      title: "Profile Card Testimonial Carousel",
      description: "A responsive testimonial carousel component featuring profile cards with avatars, descriptions, and social links. Built with smooth fade animations, bottom navigation controls, and supports both light and dark themes for seamless integration.",
      prompt: "You are given a task to integrate an existing React component in the codebase\r\n\r\nThe codebase should support:\r\n- shadcn project structure  \r\n- Tailwind CSS\r\n- Typescript\r\n\r\nIf it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.\r\n\r\nDetermine the default path for components and styles. \r\nIf default path for components is not /components/ui, provide instructions on why it's important to create this folder\r\nCopy-paste this component to /components/ui folder:\r\n```tsx\r\nprofile-card-testimonial-carousel.tsx\r\n\"use client\";\r\n\r\nimport { useState } from \"react\";\r\nimport Image from \"next/image\";\r\nimport Link from \"next/link\";\r\nimport { motion, AnimatePresence } from \"framer-motion\";\r\nimport {\r\n  Github,\r\n  Twitter,\r\n  Youtube,\r\n  Linkedin,\r\n  ChevronLeft,\r\n  ChevronRight,\r\n} from \"lucide-react\";\r\nimport { cn } from \"@/lib/utils\";\r\n\r\ninterface Testimonial {\r\n  name: string;\r\n  title: string;\r\n  description: string;\r\n  imageUrl: string;\r\n  githubUrl?: string;\r\n  twitterUrl?: string;\r\n  youtubeUrl?: string;\r\n  linkedinUrl?: string;\r\n}\r\n\r\nconst testimonials: Testimonial[] = [\r\n  {\r\n    name: \"Michael Chen\",\r\n    title: \"Senior Software Engineer, Cloud Infrastructure\",\r\n    description:\r\n      \"Working with this team completely changed our infrastructure game. The support and expertise were incredible. They delivered beyond our expectations and helped us scale to millions of users.\",\r\n    imageUrl:\r\n      \"https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\r\n    githubUrl: \"#\",\r\n    twitterUrl: \"#\",\r\n    youtubeUrl: \"#\",\r\n    linkedinUrl: \"#\",\r\n  },\r\n  {\r\n    name: \"Jessica Roberts\",\r\n    title: \"Lead Data Scientist, InsightX\",\r\n    description:\r\n      \"The data analytics platform they built gave our team the confidence and tools needed for true data-driven decisions. Their dashboarding capabilities went above and beyond our expectations.\",\r\n    imageUrl:\r\n      \"https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80\",\r\n    githubUrl: \"#\",\r\n    twitterUrl: \"#\",\r\n    youtubeUrl: \"#\",\r\n    linkedinUrl: \"#\",\r\n  },\r\n  {\r\n    name: \"William Carter\",\r\n    title: \"VP Product, NovaLabs\",\r\n    description:\r\n      \"NovaLabs helped our products find the perfect market fit. Their engineering team exceeded every delivery milestone and provided exceptional technical leadership.\",\r\n    imageUrl:\r\n      \"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80\",\r\n    githubUrl: \"#\",\r\n    twitterUrl: \"#\",\r\n    youtubeUrl: \"#\",\r\n    linkedinUrl: \"#\",\r\n  },\r\n];\r\n\r\nexport interface TestimonialCarouselProps {\r\n  className?: string;\r\n}\r\n\r\nexport function TestimonialCarousel({ className }: TestimonialCarouselProps) {\r\n  const [currentIndex, setCurrentIndex] = useState(0);\r\n\r\n  const handleNext = () =>\r\n    setCurrentIndex((index) => (index + 1) % testimonials.length);\r\n  const handlePrevious = () =>\r\n    setCurrentIndex(\r\n      (index) => (index - 1 + testimonials.length) % testimonials.length\r\n    );\r\n\r\n  const currentTestimonial = testimonials[currentIndex];\r\n\r\n  const socialIcons = [\r\n    { icon: Github, url: currentTestimonial.githubUrl, label: \"GitHub\" },\r\n    { icon: Twitter, url: currentTestimonial.twitterUrl, label: \"Twitter\" },\r\n    { icon: Youtube, url: currentTestimonial.youtubeUrl, label: \"YouTube\" },\r\n    { icon: Linkedin, url: currentTestimonial.linkedinUrl, label: \"LinkedIn\" },\r\n  ];\r\n\r\n  return (\r\n    <div className={cn(\"w-full max-w-5xl mx-auto px-4\", className)}>\r\n      {/* Desktop layout */}\r\n      <div className='hidden md:flex relative items-center'>\r\n        {/* Avatar */}\r\n        <div className='w-[470px] h-[470px] rounded-3xl overflow-hidden bg-gray-200 dark:bg-neutral-800 flex-shrink-0'>\r\n          <AnimatePresence mode='wait'>\r\n            <motion.div\r\n              key={currentTestimonial.imageUrl}\r\n              initial={{ opacity: 0 }}\r\n              animate={{ opacity: 1 }}\r\n              exit={{ opacity: 0 }}\r\n              transition={{ duration: 0.4, ease: \"easeInOut\" }}\r\n              className='w-full h-full'\r\n            >\r\n              <Image\r\n                src={currentTestimonial.imageUrl}\r\n                alt={currentTestimonial.name}\r\n                width={470}\r\n                height={470}\r\n                className='w-full h-full object-cover'\r\n                draggable={false}\r\n                priority\r\n              />\r\n            </motion.div>\r\n          </AnimatePresence>\r\n        </div>\r\n\r\n        {/* Card */}\r\n        <div className='bg-white dark:bg-card rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1'>\r\n          <AnimatePresence mode='wait'>\r\n            <motion.div\r\n              key={currentTestimonial.name}\r\n              initial={{ opacity: 0 }}\r\n              animate={{ opacity: 1 }}\r\n              exit={{ opacity: 0 }}\r\n              transition={{ duration: 0.4, ease: \"easeInOut\" }}\r\n            >\r\n              <div className='mb-6'>\r\n                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>\r\n                  {currentTestimonial.name}\r\n                </h2>\r\n\r\n                <p className='text-sm font-medium text-gray-700 dark:text-gray-500'>\r\n                  {currentTestimonial.title}\r\n                </p>\r\n              </div>\r\n\r\n              <p className='text-black dark:text-white text-base leading-relaxed mb-8'>\r\n                {currentTestimonial.description}\r\n              </p>\r\n\r\n              <div className='flex space-x-4'>\r\n                {socialIcons.map(({ icon: IconComponent, url, label }) => (\r\n                  <Link\r\n                    key={label}\r\n                    href={url || \"#\"}\r\n                    target='_blank'\r\n                    rel='noopener noreferrer'\r\n                    className='w-12 h-12 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105 cursor-pointer'\r\n                    aria-label={label}\r\n                  >\r\n                    <IconComponent className='w-5 h-5 text-white dark:text-gray-900' />\r\n                  </Link>\r\n                ))}\r\n              </div>\r\n            </motion.div>\r\n          </AnimatePresence>\r\n        </div>\r\n      </div>\r\n\r\n      {/* Mobile layout */}\r\n      <div className='md:hidden max-w-sm mx-auto text-center bg-transparent'>\r\n        {/* Avatar */}\r\n        <div className='w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden mb-6'>\r\n          <AnimatePresence mode='wait'>\r\n            <motion.div\r\n              key={currentTestimonial.imageUrl}\r\n              initial={{ opacity: 0 }}\r\n              animate={{ opacity: 1 }}\r\n              exit={{ opacity: 0 }}\r\n              transition={{ duration: 0.4, ease: \"easeInOut\" }}\r\n              className='w-full h-full'\r\n            >\r\n              <Image\r\n                src={currentTestimonial.imageUrl}\r\n                alt={currentTestimonial.name}\r\n                width={400}\r\n                height={400}\r\n                className='w-full h-full object-cover'\r\n                draggable={false}\r\n                priority\r\n              />\r\n            </motion.div>\r\n          </AnimatePresence>\r\n        </div>\r\n\r\n        {/* Card content */}\r\n        <div className='px-4'>\r\n          <AnimatePresence mode='wait'>\r\n            <motion.div\r\n              key={currentTestimonial.name}\r\n              initial={{ opacity: 0 }}\r\n              animate={{ opacity: 1 }}\r\n              exit={{ opacity: 0 }}\r\n              transition={{ duration: 0.4, ease: \"easeInOut\" }}\r\n            >\r\n              <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>\r\n                {currentTestimonial.name}\r\n              </h2>\r\n              \r\n              <p className='text-sm font-medium text-gray-600 dark:text-gray-300 mb-4'>\r\n                {currentTestimonial.title}\r\n              </p>\r\n              \r\n              <p className='text-black dark:text-white text-sm leading-relaxed mb-6'>\r\n                {currentTestimonial.description}\r\n              </p>\r\n              \r\n              <div className='flex justify-center space-x-4'>\r\n                {socialIcons.map(({ icon: IconComponent, url, label }) => (\r\n                  <Link\r\n                    key={label}\r\n                    href={url || \"#\"}\r\n                    target='_blank'\r\n                    rel='noopener noreferrer'\r\n                    className='w-12 h-12 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-gray-800 dark:hover:bg-gray-200 cursor-pointer'\r\n                    aria-label={label}\r\n                  >\r\n                    <IconComponent className='w-5 h-5 text-white dark:text-gray-900' />\r\n                  </Link>\r\n                ))}\r\n              </div>\r\n            </motion.div>\r\n          </AnimatePresence>\r\n        </div>\r\n      </div>\r\n\r\n      {/* Bottom navigation */}\r\n      <div className='flex justify-center items-center gap-6 mt-8'>\r\n        {/* Previous */}\r\n        <button\r\n          onClick={handlePrevious}\r\n          aria-label='Previous testimonial'\r\n          className='w-12 h-12 rounded-full bg-gray-100 dark:bg-card border border-gray-300 dark:border-card/40 shadow-md flex items-center justify-center hover:bg-gray-200 dark:hover:bg-card/80 transition-colors cursor-pointer'\r\n        >\r\n          <ChevronLeft className='w-6 h-6 text-gray-700 dark:text-gray-50' />\r\n        </button>\r\n\r\n        {/* Dots */}\r\n        <div className='flex gap-2'>\r\n          {testimonials.map((_, testimonialIndex) => (\r\n            <button\r\n              key={testimonialIndex}\r\n              onClick={() => setCurrentIndex(testimonialIndex)}\r\n              className={cn(\r\n                \"w-3 h-3 rounded-full transition-colors cursor-pointer\",\r\n                testimonialIndex === currentIndex\r\n                  ? \"bg-gray-900 dark:bg-white\"\r\n                  : \"bg-gray-400 dark:bg-gray-600\"\r\n              )}\r\n              aria-label={`Go to testimonial ${testimonialIndex + 1}`}\r\n            />\r\n          ))}\r\n        </div>\r\n\r\n        {/* Next */}\r\n        <button\r\n          onClick={handleNext}\r\n          aria-label='Next testimonial'\r\n          className='w-12 h-12 rounded-full bg-gray-100 dark:bg-card border border-gray-300 dark:border-card/40 shadow-md flex items-center justify-center hover:bg-gray-200 dark:hover:bg-card/80 transition-colors cursor-pointer'\r\n        >\r\n          <ChevronRight className='w-6 h-6 text-gray-700 dark:text-gray-50' />\r\n        </button>\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n\r\n\r\ndemo.tsx\r\nimport { TestimonialCarousel } from \"@/components/ui/profile-card-testimonial-carousel\";\r\n\r\nexport default function TestimonialCarouselDemo() {\r\n  return (\r\n    <div className=\"min-h-screen flex items-center justify-center\">\r\n      <TestimonialCarousel />\r\n    </div>\r\n  );\r\n}\r\n\r\n```\r\n\r\nInstall NPM dependencies:\r\n```bash\r\nnext, lucide-react, framer-motion\r\n```\r\n\r\nImplementation Guidelines\r\n 1. Analyze the component structure and identify all required dependencies\r\n 2. Review the component's argumens and state\r\n 3. Identify any required context providers or hooks and install them\r\n 4. Questions to Ask\r\n - What data/props will be passed to this component?\r\n - Are there any specific state management requirements?\r\n - Are there any required assets (images, icons, etc.)?\r\n - What is the expected responsive behavior?\r\n - What is the best place to use this component in the app?\r\n\r\nSteps to integrate\r\n 0. Copy paste all the code above in the correct directories\r\n 1. Install external dependencies\r\n 2. Fill image assets with Unsplash stock images you know exist\r\n 3. Use lucide-react icons for svgs or logos if component requires them\r\n",
      installationCode: "npx shadcn@latest add https://21st.dev/r/arunachalam0606/profile-card-testimonial-carousel",
      sourceCode: `import { TestimonialCarousel } from "@/components/ui/profile-card-testimonial-carousel";

                    export default function TestimonialCarouselDemo() {
                      return (
                        <div className="min-h-screen flex items-center justify-center">
                          <TestimonialCarousel />
                        </div>
                      );
                    }
`,
      dependencies: ["CSS"]
    },
    {
      slug: "product-card-3",
      tagline: "Ravi Katiyar",
      title: "Product Card",
      description: "Product Drop Card A sleek, carousel-style card component to showcase upcoming product drops or featured items. It includes navigation controls and a clean layout, perfect for highlighting new arrivals.",
      prompt: "npx shadcn@latest add carousel",
      installationCode: "npx shadcn@latest add https://21st.dev/r/tommyjepsen/feature-with-image-carousel",
      sourceCode: `import { Feature } from "@/components/ui/feature-with-image-carousel";

                    function FeatureDemo() {
                      return (
                        <div className="w-full">
                          <Feature />
                        </div>
                      );
                    }

                    export { FeatureDemo };`,
      dependencies: ["lucide-react"]
    },
    {
      slug: "gallery4",
      tagline: "Ravi Katiyar",
      title: "Gallery with image cards",
      description: "A carousel gallery of full height image cards with case study text on top.",
      prompt: "npx shadcn@latest add carousel",
      installationCode: "npx shadcn@latest add https://21st.dev/r/tommyjepsen/feature-with-image-carousel",
      sourceCode: `"use client";

                    import { ArrowLeft, ArrowRight } from "lucide-react";
                    import { useEffect, useState } from "react";

                    import { Button } from "@/components/ui/button";
                    import {
                      Carousel,
                      CarouselApi,
                      CarouselContent,
                      CarouselItem,
                    } from "@/components/ui/carousel";

                    export interface Gallery4Item {
                      id: string;
                      title: string;
                      description: string;
                      href: string;
                      image: string;
                    }

                    export interface Gallery4Props {
                      title?: string;
                      description?: string;
                      items: Gallery4Item[];
                    }

                    const data = [
                      {
                        id: "shadcn-ui",
                        title: "shadcn/ui: Building a Modern Component Library",
                        description:
                          "Explore how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.",
                        href: "https://ui.shadcn.com",
                        image:
                          "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
                      },
                      {
                        id: "tailwind",
                        title: "Tailwind CSS: The Utility-First Revolution",
                        description:
                          "Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.",
                        href: "https://tailwindcss.com",
                        image:
                          "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
                      },
                      {
                        id: "astro",
                        title: "Astro: The All-in-One Web Framework",
                        description:
                          "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping developers build faster websites while maintaining rich interactivity where needed.",
                        href: "https://astro.build",
                        image:
                          "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
                      },
                      {
                        id: "react",
                        title: "React: Pioneering Component-Based UI",
                        description:
                          "See how React continues to shape modern web development with its component-based architecture, enabling developers to build complex user interfaces with reusable, maintainable code.",
                        href: "https://react.dev",
                        image:
                          "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
                      },
                      {
                        id: "nextjs",
                        title: "Next.js: The React Framework for Production",
                        description:
                          "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
                        href: "https://nextjs.org",
                        image:
                          "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
                      },
                    ];

                    const Gallery4 = ({
                      title = "Case Studies",
                      description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
                      items = data,
                    }: Gallery4Props) => {
                      const [carouselApi, setCarouselApi] = useState<CarouselApi>();
                      const [canScrollPrev, setCanScrollPrev] = useState(false);
                      const [canScrollNext, setCanScrollNext] = useState(false);
                      const [currentSlide, setCurrentSlide] = useState(0);

                      useEffect(() => {
                        if (!carouselApi) {
                          return;
                        }
                        const updateSelection = () => {
                          setCanScrollPrev(carouselApi.canScrollPrev());
                          setCanScrollNext(carouselApi.canScrollNext());
                          setCurrentSlide(carouselApi.selectedScrollSnap());
                        };
                        updateSelection();
                        carouselApi.on("select", updateSelection);
                        return () => {
                          carouselApi.off("select", updateSelection);
                        };
                      }, [carouselApi]);

                      return (
                        <section className="py-32">
                          <div className="container mx-auto">
                            <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
                              <div className="flex flex-col gap-4">
                                <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
                                  {title}
                                </h2>
                                <p className="max-w-lg text-muted-foreground">{description}</p>
                              </div>
                              <div className="hidden shrink-0 gap-2 md:flex">
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  onClick={() => {
                                    carouselApi?.scrollPrev();
                                  }}
                                  disabled={!canScrollPrev}
                                  className="disabled:pointer-events-auto"
                                >
                                  <ArrowLeft className="size-5" />
                                </Button>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  onClick={() => {
                                    carouselApi?.scrollNext();
                                  }}
                                  disabled={!canScrollNext}
                                  className="disabled:pointer-events-auto"
                                >
                                  <ArrowRight className="size-5" />
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="w-full">
                            <Carousel
                              setApi={setCarouselApi}
                              opts={{
                                breakpoints: {
                                  "(max-width: 768px)": {
                                    dragFree: true,
                                  },
                                },
                              }}
                            >
                              <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
                                {items.map((item) => (
                                  <CarouselItem
                                    key={item.id}
                                    className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
                                  >
                                    <a href={item.href} className="group rounded-xl">
                                      <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                                        <img
                                          src={item.image}
                                          alt={item.title}
                                          className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                                          <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                                            {item.title}
                                          </div>
                                          <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                                            {item.description}
                                          </div>
                                          <div className="flex items-center text-sm">
                                            Read more{" "}
                                            <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                            </Carousel>
                            <div className="mt-8 flex justify-center gap-2">
                              {items.map((_, index) => (
                                <button
                                  key={index}
                                  className={\`h-2 w-2 rounded-full transition-colors \${currentSlide === index ? "bg-primary" : "bg-primary/20"}\`}
                                  onClick={() => carouselApi?.scrollTo(index)}
                                  aria-label={\`Go to slide \${index + 1}\`}
                                />
                              ))}
                            </div>
                          </div>
                        </section>
                      );
                    };

                    export { Gallery4 };`,
      dependencies: ["lucide-react"]
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
