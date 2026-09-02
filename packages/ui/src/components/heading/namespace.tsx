import type { FC } from "react"
import type { HeadingProps } from "./heading"
import { Heading } from "./heading"

/**
 * Extended Heading component interface that provides static methods for each heading level
 *
 * @remarks
 * Allows creating heading components with predefined levels (h1-h6)
 * while maintaining the original Heading component's props
 *
 * @example
 * // Using h2 heading
 * <Heading.h2>Section Title</Heading.h2>
 *
 * @example
 * // Using default heading with additional props
 * <Heading color="blue.500" textAlign="center">Centered Heading</Heading>
 */
type HeadingLevelProps = Omit<HeadingProps, "as">

interface HeadingComponent extends FC<HeadingProps> {
  /**
   * Heading level 1 component
   * @param props - Heading properties excluding 'as'
   */
  h1: FC<HeadingLevelProps>

  /**
   * Heading level 2 component
   * @param props - Heading properties excluding 'as'
   */
  h2: FC<HeadingLevelProps>

  /**
   * Heading level 3 component
   * @param props - Heading properties excluding 'as'
   */
  h3: FC<HeadingLevelProps>

  /**
   * Heading level 4 component
   * @param props - Heading properties excluding 'as'
   */
  h4: FC<HeadingLevelProps>

  /**
   * Heading level 5 component
   * @param props - Heading properties excluding 'as'
   */
  h5: FC<HeadingLevelProps>

  /**
   * Heading level 6 component
   * @param props - Heading properties excluding 'as'
   */
  h6: FC<HeadingLevelProps>
}

/**
 * Extends the base Heading component with static methods for each heading level
 */
const HeadingWithNamespace = Heading as HeadingComponent

// Create static methods for each heading level
HeadingWithNamespace.h1 = (props) => <Heading {...props} as="h1" />
HeadingWithNamespace.h2 = (props) => <Heading {...props} as="h2" />
HeadingWithNamespace.h3 = (props) => <Heading {...props} as="h3" />
HeadingWithNamespace.h4 = (props) => <Heading {...props} as="h4" />
HeadingWithNamespace.h5 = (props) => <Heading {...props} as="h5" />
HeadingWithNamespace.h6 = (props) => <Heading {...props} as="h6" />

/**
 * Exported Heading component with namespace-style level-specific components
 */
export { HeadingWithNamespace as Heading }
