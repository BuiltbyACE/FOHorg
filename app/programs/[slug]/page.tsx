import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { programs, programCategories } from '@/constants/programs';
import ProgramDetailContent from '@/components/programs/ProgramDetailContent';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return {
      title: 'Program Not Found | Fountain of Hope',
    };
  }

  return {
    title: `${program.title} | Fountain of Hope`,
    description: program.description,
  };
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  const category = programCategories.find((c) =>
    c.programs.some((p) => p.id === program.id)
  );

  const relatedPrograms = category
    ? category.programs.filter((p) => p.id !== program.id)
    : [];

  return (
    <ProgramDetailContent
      programId={program.id}
      categoryTitle={category?.title ?? ''}
      relatedProgramIds={relatedPrograms.map((p) => p.id)}
    />
  );
}
