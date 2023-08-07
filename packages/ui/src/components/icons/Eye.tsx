import type { IconProps } from '@tamagui/helpers-icon'
import { forwardRef, memo } from 'react'
import { Path, Svg } from 'react-native-svg'
import { getTokenValue, isWeb, useTheme } from 'tamagui'

const Icon = forwardRef<Svg, IconProps>((props, ref) => {
  // isWeb currentColor to maintain backwards compat a bit better, on native uses theme color
  const {
    color: colorProp = isWeb ? 'currentColor' : undefined,
    size: sizeProp = '$true',
    strokeWidth: strokeWidthProp,
    ...restProps
  } = props
  const theme = useTheme()

  const size =
    getTokenValue(
      // @ts-expect-error it falls back to undefined
      sizeProp,
      'size'
    ) ?? sizeProp

  const strokeWidth =
    getTokenValue(
      // @ts-expect-error it falls back to undefined
      strokeWidthProp,
      'size'
    ) ?? strokeWidthProp

  const color =
    // @ts-expect-error its fine to access colorProp undefined
    theme[colorProp]?.get() ?? colorProp ?? theme.color.get()

  const svgProps = {
    ...restProps,
    size,
    strokeWidth,
    color,
  }

  return (
    <Svg ref={ref} fill="none" height={size} viewBox="0 0 16 16" width={size} {...svgProps}>
      <Path
        d="M9.83336 8.00016C9.83336 9.0115 9.01136 9.8335 8.00003 9.8335C6.98869 9.8335 6.16669 9.0115 6.16669 8.00016C6.16669 7.7675 6.21464 7.5468 6.29397 7.34147C6.42331 7.44414 6.57935 7.51481 6.75735 7.51481C7.17535 7.51481 7.51468 7.17549 7.51468 6.75749C7.51468 6.57949 7.444 6.42344 7.34134 6.29411C7.54667 6.21477 7.76736 6.16683 8.00003 6.16683C9.01136 6.16683 9.83336 6.98883 9.83336 8.00016ZM13.7281 8.98486C12.9101 10.3542 11.0727 12.6668 8.00003 12.6668C4.92736 12.6668 3.09 10.3542 2.272 8.98486C1.90933 8.3782 1.90933 7.62213 2.272 7.01546C3.09 5.64613 4.92736 3.3335 8.00003 3.3335C11.0727 3.3335 12.9101 5.64613 13.7281 7.01546C14.0907 7.62213 14.0907 8.3782 13.7281 8.98486ZM10.8334 8.00016C10.8334 6.43816 9.56269 5.16683 8.00003 5.16683C6.43736 5.16683 5.16669 6.43816 5.16669 8.00016C5.16669 9.56216 6.43736 10.8335 8.00003 10.8335C9.56269 10.8335 10.8334 9.56216 10.8334 8.00016Z"
        fill={color}
      />
    </Svg>
  )
})

Icon.displayName = 'Eye'

export const Eye = memo<IconProps>(Icon)
