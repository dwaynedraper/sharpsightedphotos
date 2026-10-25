import BzFooter from '@/components/bz/BzFooter';

export default function BusinessLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bz">
      {children}
      <BzFooter />
    </div>
  );
}
