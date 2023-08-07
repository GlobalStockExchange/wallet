import type { IconProps } from '@tamagui/helpers-icon'
import { forwardRef, memo } from 'react'
import { Defs, G, Path, Rect, Svg } from 'react-native-svg'
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
      <G clipPath="url(#clip0_1010_7085)">
        <Path
          d="M1.86872 12.195C1.86787 12.862 2.02828 13.3556 2.34994 13.6758C2.67075 13.9969 3.15748 14.1549 3.81016 14.1498H5.26271C5.3234 14.1475 5.38392 14.1577 5.44056 14.1796C5.49719 14.2016 5.54875 14.235 5.59204 14.2776L6.62595 15.2997C7.09567 15.769 7.55602 16.0024 8.00702 15.9999C8.45802 15.9973 8.91839 15.7639 9.38812 15.2997L10.4093 14.2776C10.454 14.2345 10.5071 14.2009 10.5653 14.1789C10.6234 14.1569 10.6854 14.1471 10.7475 14.1498H12.1911C12.8506 14.1507 13.342 13.9901 13.6654 13.6682C13.9888 13.3462 14.1505 12.8526 14.1505 12.1874V10.7423C14.1471 10.6171 14.193 10.4956 14.2781 10.4038L15.2992 9.38165C15.7749 8.91403 16.0111 8.45366 16.0077 8.00052C16.0043 7.54738 15.7681 7.08657 15.2992 6.6181L14.2781 5.59599C14.1927 5.50432 14.1469 5.38268 14.1505 5.25741V3.81239C14.1496 3.14631 13.9892 2.65272 13.6692 2.3316C13.3493 2.01049 12.8566 1.84993 12.1911 1.84993H10.7475C10.6854 1.85248 10.6235 1.84249 10.5654 1.82054C10.5073 1.79858 10.4542 1.76512 10.4093 1.72216L9.38812 0.700046C8.91839 0.230724 8.45802 -0.00265661 8.00702 -0.000101314C7.55602 0.00245398 7.09567 0.235835 6.62595 0.700046L5.59204 1.72216C5.54861 1.76462 5.49706 1.79784 5.44046 1.8198C5.38386 1.84175 5.32338 1.852 5.26271 1.84993H3.81016C3.15152 1.85078 2.6618 2.01006 2.34099 2.32777C2.02019 2.64547 1.85978 3.14035 1.85978 3.81239V5.26125C1.86336 5.38651 1.8175 5.50815 1.73214 5.59982L0.711 6.62193C0.242128 7.08955 0.00769043 7.55036 0.00769043 8.00435C0.00769043 8.45834 0.245115 8.92 0.719944 9.38932L1.74108 10.4114C1.82621 10.5033 1.87203 10.6248 1.86872 10.75V12.195Z"
          fill={color}
        />
        <Path
          d="M7.94236 10.7354C7.79163 10.965 7.56913 11.0942 7.31075 11.0942C7.04518 11.0942 6.83703 10.9866 6.64324 10.7354L4.94937 8.66826C4.82735 8.51754 4.76276 8.35963 4.76276 8.18737C4.76276 7.8285 5.0355 7.54858 5.38719 7.54858C5.60252 7.54858 5.77477 7.62754 5.94703 7.85004L7.28204 9.55109L10.1171 5.0006C10.2678 4.75656 10.4616 4.64172 10.677 4.64172C11.0143 4.64172 11.3301 4.87858 11.3301 5.23027C11.3301 5.39535 11.244 5.56761 11.1507 5.71834L7.94236 10.7354Z"
          fill="white"
        />
      </G>
      <Defs>
        <clipPath id="clip0_1010_7085">
          <Rect fill="white" height="16" width="16" />
        </clipPath>
      </Defs>
    </Svg>
  )
})

Icon.displayName = 'Verified'

export const Verified = memo<IconProps>(Icon)
