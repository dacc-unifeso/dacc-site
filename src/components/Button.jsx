/**
 * Botão reutilizável com variantes alinhadas às classes .btn do design system.
 */
export function Button({
  variant = 'primary',
  as: Component = 'button',
  className = '',
  type = 'button',
  children,
  ...props
}) {
  const variantClass =
    variant === 'secondary'
      ? 'btn-secondary'
      : variant === 'ghost'
        ? 'btn-ghost'
        : variant === 'icon'
          ? 'btn-icon'
          : 'btn-primary'

  const classes = `btn ${variantClass} ${className}`.trim()

  if (Component === 'button') {
    return (
      <button type={type} className={classes} {...props}>
        {children}
      </button>
    )
  }

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
