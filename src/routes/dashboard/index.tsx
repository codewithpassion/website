export const Component = function Dashboard(props: DashboardProps): JSX.Element {
  const { className, ...other } = props;

  return (
    <div className={`${className}`} {...other}>
      <h1 className="text-4xl font-light text-center">Dashboard</h1>
    </div>
  );
}

export type DashboardProps = React.HTMLAttributes<HTMLDivElement>;