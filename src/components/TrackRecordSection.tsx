import React from 'react';
import { 
  Building2, 
  Trophy, 
  Award, 
  MapPin, 
  Calendar,
  Users2
} from 'lucide-react';
import { TRACK_RECORD } from '../data/portfolioData';

// Contextual category icons for each track record type
const getRecordIcon = (type?: string, institutionKey?: string) => {
  if (institutionKey === 'hackathon' || type === 'achievement') {
    return <Trophy className="w-5 h-5 text-blue-600" aria-hidden="true" />;
  }
  if (institutionKey === 'gdsc' || type === 'organization') {
    return <Users2 className="w-5 h-5 text-blue-600" aria-hidden="true" />;
  }
  if (institutionKey === 'certifications' || type === 'certification') {
    return <Award className="w-5 h-5 text-blue-600" aria-hidden="true" />;
  }
  return <Building2 className="w-5 h-5 text-blue-600" aria-hidden="true" />;
};

export const TrackRecordSection: React.FC = () => {
  return (
    <section id="track-record" className="py-20 border-b border-slate-200">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase block mb-2">
          03 — Track Record
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
          Pengalaman, Organisasi &amp; Prestasi
        </h2>
        <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
          Rekam jejak akademik, kepemimpinan komunitas teknologi, dan pencapaian kompetisi yang membentuk etos kerja rekayasa perangkat lunak.
        </p>
      </div>

      {/* Structured Editorial Timeline */}
      <div className="relative">
        {/* Continuous spine line */}
        <div 
          className="absolute left-4 sm:left-6 top-4 bottom-4 w-px bg-slate-200" 
          aria-hidden="true" 
        />

        <div className="space-y-10 sm:space-y-12">
          {TRACK_RECORD.map((item) => (
            <div
              key={item.id}
              className="relative flex items-start gap-4 sm:gap-7 group"
            >
              {/* Timeline Node Marker */}
              <div className="relative z-10 shrink-0">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-sm md:rounded-lg bg-white border border-slate-200 shadow-xs flex items-center justify-center transition-colors group-hover:border-blue-400 group-hover:bg-blue-50">
                  {getRecordIcon(item.type, item.institutionKey)}
                </div>
              </div>

              {/* Record Content Box */}
              <div className="flex-1 bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-xs hover:border-slate-300 transition-colors">
                {/* Meta Row: Period, Badge, Location */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                      {item.badge}
                    </span>
                    <span className="text-xs font-medium text-slate-500 font-mono">
                      {item.organization}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                    {item.location && (
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                        <span>{item.location}</span>
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 font-semibold text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                      <span>{item.period}</span>
                    </span>
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {item.role}
                </h3>

                {/* Role Narrative Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Verifiable Key Contributions / Highlights (Directly readable, no accordion friction) */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mb-5 pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      Kontribusi &amp; Pencapaian Utama
                    </h4>
                    <ul className="space-y-2.5">
                      {item.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Relevant Skills / Competencies */}
                {item.skills && item.skills.length > 0 && (
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
