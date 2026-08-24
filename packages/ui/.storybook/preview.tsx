import { VStack } from "@repo/yamada-ui"
import { UIProvider } from "@repo/yamada-ui"
import type { Preview } from "@storybook/react"
import type { FC, PropsWithChildren } from "react"

interface AppProps extends PropsWithChildren {
  isDocs?: boolean
}

const App: FC<AppProps> = ({ children, isDocs }) => {
  return (
    <VStack
      align="start"
      gap={{ base: "lg", md: "md" }}
      minH={
        isDocs
          ? undefined
          : {
              base: "calc(100dvh - $spaces.lg * 2)",
              md: "calc(100dvh - $spaces.md * 2)",
            }
      }
      overflowX="auto"
      overflowY="visible"
      p={{ base: "lg", md: "md" }}
    >
      {children}
    </VStack>
  )
}

const preview: Preview = {
  globalTypes: {},
  initialGlobals: {},
  parameters: {
    backgrounds: { disable: true },
    controls: {
      expanded: true,
    },
    layout: "fullscreen",
    codePanel: true,
  },
  decorators: [
    (Story, { viewMode }) => {
      return (
        <UIProvider>
          <App isDocs={viewMode === "docs"}>
            <Story />
          </App>
        </UIProvider>
      )
    },
  ],
}

export default preview
