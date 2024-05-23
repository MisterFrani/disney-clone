interface HeaderItemsProps {
  name?: string;
  Icon: React.ComponentType;
}

export default function HeaderItems({ name, Icon }: HeaderItemsProps) {
  return (
    <button className="flex items-center gap-2 text-white hover:underline underline-offset-8 ">
      <Icon />
      <p className="uppercase font-bold">{name}</p>
    </button>
  );
}
