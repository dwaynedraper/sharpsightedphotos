import PsFooter from '@/components/ps/PsFooter';

export default function PersonalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="ps">
      {children}
      <PsFooter />
    </div>
  );
}
