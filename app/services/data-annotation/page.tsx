"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useEffect, useState } from "react";

export default function DataAnnotation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Trigger animations on mount
    const timer = setTimeout(() => {
      const leftContent = document.querySelector('.animate-left');
      const rightContent = document.querySelector('.animate-right');
      if (leftContent && rightContent) {
        leftContent.classList.add('visible');
        rightContent.classList.add('visible');
      }
    }, 100);

    // Scroll-triggered animations for cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.fade-in-up');
    cards.forEach(card => observer.observe(card));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="page-root">
      <Header />
      
      {/* Hero Section - Different Style */}
      <section style={{
        padding: '40px 6vw 80px',
        background: 'var(--bg-primary)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            {/* Left Content */}
            <div className="animate-left">
              <h1 style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 900,
                lineHeight: 1.2,
                marginBottom: '24px',
                color: 'var(--text-primary)'
              }}>
                Precision Labeling for Your <span style={{ color: 'var(--accent-1)' }}>AI Models</span>
              </h1>
              <p style={{
                fontSize: '18px',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '32px'
              }}>
                From 2D bounding boxes to complex 3D point clouds, we deliver high-quality annotations 
                across images, videos, audio, and LiDAR data with pixel-perfect accuracy.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
                <div style={{
                  padding: '10px 20px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600
                }}>✓ 2D Bounding Box</div>
                <div style={{
                  padding: '10px 20px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600
                }}>✓ Polygon Segmentation</div>
                <div style={{
                  padding: '10px 20px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600
                }}>✓ 3D Cuboid</div>
                <div style={{
                  padding: '10px 20px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600
                }}>✓ LiDAR Point Cloud</div>
                <div style={{
                  padding: '10px 20px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600
                }}>✓ Video Tracking</div>
                <div style={{
                  padding: '10px 20px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600
                }}>✓ Keypoint Detection</div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="animate-right" style={{
              position: 'relative',
              height: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Annotation Illustration */}
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(255,107,53,0.05), rgba(0,217,255,0.05))',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
              }}>
                <svg width="100%" height="100%" viewBox="0 0 500 500" style={{ position: 'absolute' }}>
                  {/* Background grid */}
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--card-border)" strokeWidth="0.5" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="500" height="500" fill="url(#grid)"/>
                  
                  {/* Image placeholder */}
                  <rect x="80" y="100" width="340" height="300" rx="8" fill="rgba(200,200,200,0.1)" stroke="var(--card-border)" strokeWidth="2"/>
                  
                  {/* Animated bounding boxes */}
                  <rect x="120" y="160" width="140" height="120" rx="4" fill="none" stroke="var(--accent-1)" strokeWidth="3">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
                  </rect>
                  <text x="125" y="155" fill="var(--accent-1)" fontSize="12" fontWeight="700">Car - 98%</text>
                  
                  {/* Polygon segmentation */}
                  <path d="M300 200 L360 180 L400 240 L380 320 L320 340 Z" fill="rgba(0,217,255,0.15)" stroke="var(--accent-2)" strokeWidth="3">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
                  </path>
                  <text x="305" y="195" fill="var(--accent-2)" fontSize="12" fontWeight="700">Person - 95%</text>
                  
                  {/* Keypoints */}
                  <circle cx="200" cy="240" r="5" fill="var(--accent-4)">
                    <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="220" cy="260" r="5" fill="var(--accent-4)">
                    <animate attributeName="r" values="5;7;5" dur="1.5s" begin="0.2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="180" cy="260" r="5" fill="var(--accent-4)">
                    <animate attributeName="r" values="5;7;5" dur="1.5s" begin="0.4s" repeatCount="indefinite"/>
                  </circle>
                  <line x1="200" y1="240" x2="220" y2="260" stroke="var(--accent-4)" strokeWidth="2"/>
                  <line x1="200" y1="240" x2="180" y2="260" stroke="var(--accent-4)" strokeWidth="2"/>
                </svg>
                <svg width="200" height="200" viewBox="0 0 200 200" style={{ zIndex: 2 }}>
                  <rect x="20" y="40" width="80" height="60" fill="none" stroke="var(--accent-1)" strokeWidth="3" />
                  <rect x="100" y="80" width="70" height="50" fill="none" stroke="var(--accent-4)" strokeWidth="3" />
                  <circle cx="60" cy="70" r="5" fill="var(--accent-2)" />
                  <circle cx="140" cy="105" r="5" fill="var(--accent-2)" />
                  <text x="100" y="180" textAnchor="middle" fill="var(--text-secondary)" fontSize="14" fontWeight="600">
                    Annotation Example
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annotation Types */}
      <section style={{
        padding: '80px 6vw',
        background: 'var(--bg-secondary)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              marginBottom: '16px'
            }}>Comprehensive Annotation Services</h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Expert labeling across all major data types and annotation formats
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="10" y="12" width="28" height="24" stroke="var(--accent-1)" strokeWidth="3" rx="2"/>
                    <circle cx="14" cy="16" r="2" fill="var(--accent-4)"/>
                    <circle cx="34" cy="32" r="2" fill="var(--accent-4)"/>
                  </svg>
                ),
                title: '2D Bounding Box',
                desc: 'Industry-standard rectangular annotations for object detection and classification. Perfect for training YOLO, R-CNN, and SSD models.',
                details: 'Tight-fitting boxes with precise coordinates (x, y, width, height). We handle overlapping objects, partial occlusions, and rotated bounding boxes for oriented object detection.',
                types: ['Axis-Aligned Boxes', 'Rotated Boxes', 'Multi-Class Labels', 'Confidence Scores']
              },
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M12 16 L24 8 L36 16 L32 32 L16 32 Z" stroke="var(--accent-1)" strokeWidth="2.5" fill="rgba(255,107,53,0.1)"/>
                    <circle cx="12" cy="16" r="2" fill="var(--accent-4)"/>
                    <circle cx="24" cy="8" r="2" fill="var(--accent-4)"/>
                    <circle cx="36" cy="16" r="2" fill="var(--accent-4)"/>
                  </svg>
                ),
                title: 'Polygon & Segmentation',
                desc: 'Pixel-precise annotations for complex, irregular shapes. Essential for medical imaging, satellite imagery, and autonomous driving applications.',
                details: 'Multi-point polygons with unlimited vertices for accurate object boundaries. Supports instance segmentation (individual objects), semantic segmentation (pixel classification), and panoptic segmentation (combining both).',
                types: ['Instance Segmentation', 'Semantic Masks', 'Panoptic', 'Multi-Part Objects', 'Occlusion Handling']
              },
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="14" r="3" fill="var(--accent-1)"/>
                    <circle cx="18" cy="24" r="2.5" fill="var(--accent-4)"/>
                    <circle cx="30" cy="24" r="2.5" fill="var(--accent-4)"/>
                    <circle cx="18" cy="34" r="2.5" fill="var(--accent-4)"/>
                    <circle cx="30" cy="34" r="2.5" fill="var(--accent-4)"/>
                    <line x1="24" y1="14" x2="18" y2="24" stroke="var(--accent-2)" strokeWidth="2"/>
                    <line x1="24" y1="14" x2="30" y2="24" stroke="var(--accent-2)" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Keypoint & Landmark Annotation',
                desc: 'Precise point marking for pose estimation, facial recognition, and skeletal tracking. Critical for fitness apps, AR filters, and biometric systems.',
                details: 'Mark anatomical landmarks, joint positions, or custom points with sub-pixel accuracy. Supports skeletal connections, visibility flags, and confidence scores for occluded points.',
                types: ['Body Pose (17-33 points)', 'Facial Landmarks (68-468 points)', 'Hand Tracking (21 points)', 'Custom Skeletons', 'Visibility States']
              },
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="14" y="18" width="20" height="16" stroke="var(--accent-1)" strokeWidth="2.5" rx="1" fill="rgba(255,107,53,0.05)"/>
                    <path d="M14 18 L10 14 L30 14 L34 18" stroke="var(--accent-1)" strokeWidth="2.5" fill="none"/>
                    <path d="M34 18 L34 34 L30 30" stroke="var(--accent-1)" strokeWidth="2.5" fill="none"/>
                    <path d="M14 34 L10 30 L10 14" stroke="var(--accent-1)" strokeWidth="2.5" fill="none"/>
                  </svg>
                ),
                title: '3D Cuboid Annotation',
                desc: 'Three-dimensional bounding boxes with orientation, rotation, and depth. Essential for autonomous vehicles, robotics, and AR/VR applications.',
                details: '3D boxes with 9 degrees of freedom (x, y, z position + width, height, depth + yaw, pitch, roll). Handles perspective projection, truncation, and occlusion reasoning for accurate spatial understanding.',
                types: ['3D Object Detection', 'Orientation Vectors', 'Occlusion Levels', 'Truncation Flags', 'Distance Estimation']
              },
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="12" cy="20" r="1.5" fill="var(--accent-1)"/>
                    <circle cx="18" cy="16" r="1.5" fill="var(--accent-1)"/>
                    <circle cx="24" cy="22" r="1.5" fill="var(--accent-2)"/>
                    <circle cx="30" cy="18" r="1.5" fill="var(--accent-2)"/>
                    <circle cx="36" cy="24" r="1.5" fill="var(--accent-1)"/>
                    <circle cx="16" cy="28" r="1.5" fill="var(--accent-4)"/>
                    <circle cx="22" cy="32" r="1.5" fill="var(--accent-4)"/>
                    <circle cx="28" cy="30" r="1.5" fill="var(--accent-2)"/>
                    <circle cx="34" cy="34" r="1.5" fill="var(--accent-1)"/>
                  </svg>
                ),
                title: 'LiDAR Point Cloud',
                desc: '3D point cloud annotation for autonomous navigation, mapping, and environmental sensing. Process millions of points with semantic labels.',
                details: 'Annotate raw LiDAR scans with 3D bounding boxes, semantic segmentation, and instance IDs. Handle multi-frame tracking, ground plane removal, and intensity-based classification for robust perception.',
                types: ['3D Semantic Segmentation', 'Object Tracking', 'Ground Removal', 'Intensity Classification', 'Multi-Sensor Fusion']
              },
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="12" width="32" height="24" rx="2" stroke="var(--accent-1)" strokeWidth="2.5"/>
                    <rect x="14" y="18" width="8" height="6" stroke="var(--accent-4)" strokeWidth="2" fill="rgba(255,23,68,0.1)"/>
                    <rect x="24" y="20" width="6" height="8" stroke="var(--accent-2)" strokeWidth="2" fill="rgba(0,217,255,0.1)"/>
                    <path d="M42 16 L46 20 L42 24" stroke="var(--accent-1)" strokeWidth="2" fill="none"/>
                  </svg>
                ),
                title: 'Video Annotation',
                desc: 'Frame-by-frame annotation with temporal consistency and object tracking across sequences. Perfect for action recognition and surveillance.',
                details: 'Track objects through video sequences with unique IDs. Interpolation between keyframes reduces manual work. Supports action recognition, event detection, and temporal segmentation with timestamps.',
                types: ['Object Tracking', 'Action Recognition', 'Event Detection', 'Keyframe Interpolation', 'Temporal Segmentation', 'Activity Labels']
              },
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="10" y="10" width="28" height="28" rx="3" stroke="var(--accent-1)" strokeWidth="2.5"/>
                    <circle cx="18" cy="20" r="4" fill="var(--accent-4)"/>
                    <path d="M10 32 L18 24 L26 28 L38 18" stroke="var(--accent-2)" strokeWidth="2.5" fill="none"/>
                  </svg>
                ),
                title: 'Image Classification',
                desc: 'Categorize entire images into single or multiple classes. Foundation for content moderation, quality control, and visual search systems.',
                details: 'Assign categorical labels with confidence scores. Supports hierarchical taxonomies, multi-label classification, and fine-grained categorization. Ideal for large-scale dataset organization and filtering.',
                types: ['Single-Label', 'Multi-Label', 'Hierarchical Categories', 'Binary Classification', 'Fine-Grained Classes']
              },
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M12 24 Q16 16 24 20 T36 24" stroke="var(--accent-1)" strokeWidth="3" fill="none"/>
                    <path d="M12 28 Q18 20 24 24 T36 28" stroke="var(--accent-2)" strokeWidth="2.5" fill="none"/>
                    <circle cx="12" cy="24" r="2" fill="var(--accent-4)"/>
                    <circle cx="24" cy="20" r="2" fill="var(--accent-4)"/>
                    <circle cx="36" cy="24" r="2" fill="var(--accent-4)"/>
                  </svg>
                ),
                title: 'Audio & Speech Annotation',
                desc: 'Transcription, speaker diarization, and acoustic event labeling. Powers voice assistants, call centers, and audio content analysis.',
                details: 'High-accuracy speech-to-text with timestamps, speaker identification, emotion tagging, and acoustic event detection. Handle multiple languages, accents, background noise, and overlapping speech.',
                types: ['Speech-to-Text', 'Speaker Diarization', 'Emotion Recognition', 'Sound Event Detection', 'Music Tagging', 'Language ID']
              }
            ].map((service, idx) => (
              <div key={idx} className={`card fade-in-up animate-card-${idx + 1}`} style={{
                padding: '32px',
                transition: 'all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 107, 53, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
              }}>
                <div style={{
                  marginBottom: '20px',
                  lineHeight: 1
                }}>{service.icon}</div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  marginBottom: '12px',
                  color: 'var(--text-primary)'
                }}>{service.title}</h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '15px',
                  lineHeight: 1.7,
                  marginBottom: '12px',
                  fontWeight: 600
                }}>{service.desc}</p>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                  opacity: 0.9
                }}>{service.details}</p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {service.types.map((type, i) => (
                    <span key={i} style={{
                      fontSize: '11px',
                      padding: '5px 10px',
                      background: 'rgba(255, 107, 53, 0.08)',
                      color: 'var(--accent-1)',
                      borderRadius: '4px',
                      fontWeight: 700,
                      border: '1px solid rgba(255, 107, 53, 0.15)'
                    }}>
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annotation Examples with Visuals */}
      <section style={{
        padding: '80px 6vw',
        background: 'var(--bg-secondary)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '16px'
          }}>Annotation Examples</h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '700px',
            margin: '0 auto 60px'
          }}>
            See how our annotations look in real-world scenarios
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {/* Example 1: Object Detection */}
            <div className="card fade-in-up" style={{
              padding: '0',
              overflow: 'hidden',
              transition: 'all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '';
            }}>
              <div style={{
                height: '240px',
                background: 'linear-gradient(135deg, rgba(255,107,53,0.08), rgba(0,217,255,0.08))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                borderBottom: '2px solid var(--card-border)'
              }}>
                {/* Sample bounding boxes */}
                <svg width="100%" height="100%" viewBox="0 0 400 240" style={{ position: 'absolute' }}>
                  <rect x="60" y="60" width="120" height="100" fill="none" stroke="var(--accent-1)" strokeWidth="3" rx="4"/>
                  <text x="65" y="55" fill="var(--accent-1)" fontSize="14" fontWeight="700">Car - 98%</text>
                  <rect x="220" y="80" width="90" height="80" fill="none" stroke="var(--accent-4)" strokeWidth="3" rx="4"/>
                  <text x="225" y="75" fill="var(--accent-4)" fontSize="14" fontWeight="700">Person - 95%</text>
                </svg>
                <div style={{
                  fontSize: '64px',
                  opacity: 0.3
                }}>🚗</div>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>Object Detection</h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: 1.6
                }}>
                  Bounding boxes with class labels and confidence scores for autonomous driving scenarios
                </p>
              </div>
            </div>

            {/* Example 2: Segmentation */}
            <div className="card fade-in-up" style={{
              padding: '0',
              overflow: 'hidden',
              transition: 'all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '';
            }}>
              <div style={{
                height: '240px',
                background: 'linear-gradient(135deg, rgba(107,203,127,0.08), rgba(255,107,53,0.08))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                borderBottom: '2px solid var(--card-border)'
              }}>
                <svg width="100%" height="100%" viewBox="0 0 400 240">
                  <path d="M80 80 L160 60 L240 100 L220 180 L120 200 Z" fill="rgba(255,107,53,0.2)" stroke="var(--accent-1)" strokeWidth="3"/>
                  <path d="M260 70 L340 80 L350 160 L300 180 L250 140 Z" fill="rgba(0,217,255,0.2)" stroke="var(--accent-2)" strokeWidth="3"/>
                </svg>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>Polygon Segmentation</h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: 1.6
                }}>
                  Precise polygon masks for irregular shapes and complex object boundaries
                </p>
              </div>
            </div>

            {/* Example 3: Pose Estimation */}
            <div className="card fade-in-up" style={{
              padding: '0',
              overflow: 'hidden',
              transition: 'all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '';
            }}>
              <div style={{
                height: '240px',
                background: 'linear-gradient(135deg, rgba(255,23,68,0.08), rgba(107,203,127,0.08))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                borderBottom: '2px solid var(--card-border)'
              }}>
                <svg width="100%" height="100%" viewBox="0 0 400 240">
                  <circle cx="200" cy="60" r="12" fill="var(--accent-1)"/>
                  <circle cx="180" cy="100" r="8" fill="var(--accent-4)"/>
                  <circle cx="220" cy="100" r="8" fill="var(--accent-4)"/>
                  <circle cx="180" cy="150" r="8" fill="var(--accent-2)"/>
                  <circle cx="220" cy="150" r="8" fill="var(--accent-2)"/>
                  <line x1="200" y1="60" x2="180" y2="100" stroke="var(--accent-1)" strokeWidth="4"/>
                  <line x1="200" y1="60" x2="220" y2="100" stroke="var(--accent-1)" strokeWidth="4"/>
                  <line x1="180" y1="100" x2="180" y2="150" stroke="var(--accent-2)" strokeWidth="4"/>
                  <line x1="220" y1="100" x2="220" y2="150" stroke="var(--accent-2)" strokeWidth="4"/>
                </svg>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>Pose Estimation</h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: 1.6
                }}>
                  Skeletal keypoints for human pose tracking and activity recognition
                </p>
              </div>
            </div>

            {/* Example 4: 3D Cuboid */}
            <div className="card fade-in-up" style={{
              padding: '0',
              overflow: 'hidden',
              transition: 'all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '';
            }}>
              <div style={{
                height: '240px',
                background: 'linear-gradient(135deg, rgba(0,217,255,0.08), rgba(255,23,68,0.08))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                borderBottom: '2px solid var(--card-border)'
              }}>
                <svg width="100%" height="100%" viewBox="0 0 400 240">
                  {/* 3D cuboid wireframe */}
                  <path d="M120 100 L180 70 L240 100 L180 130 Z" fill="rgba(255,107,53,0.1)" stroke="var(--accent-1)" strokeWidth="3"/>
                  <path d="M120 100 L120 160 L180 190 L180 130 Z" fill="rgba(255,107,53,0.15)" stroke="var(--accent-1)" strokeWidth="3"/>
                  <path d="M180 130 L180 190 L240 160 L240 100 Z" fill="rgba(255,107,53,0.2)" stroke="var(--accent-1)" strokeWidth="3"/>
                  <circle cx="120" cy="100" r="4" fill="var(--accent-4)"/>
                  <circle cx="180" cy="70" r="4" fill="var(--accent-4)"/>
                  <circle cx="240" cy="100" r="4" fill="var(--accent-4)"/>
                  <circle cx="180" cy="130" r="4" fill="var(--accent-4)"/>
                </svg>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>3D Cuboid Annotation</h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: 1.6
                }}>
                  3D bounding boxes with orientation for depth perception and spatial understanding
                </p>
              </div>
            </div>

            {/* Example 5: LiDAR Point Cloud */}
            <div className="card fade-in-up" style={{
              padding: '0',
              overflow: 'hidden',
              transition: 'all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '';
            }}>
              <div style={{
                height: '240px',
                background: 'linear-gradient(135deg, rgba(107,203,127,0.08), rgba(0,217,255,0.08))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                borderBottom: '2px solid var(--card-border)'
              }}>
                <svg width="100%" height="100%" viewBox="0 0 400 240">
                  {/* Point cloud scatter */}
                  {Array.from({length: 80}).map((_, i) => {
                    const cx = 60 + ((i * 37) % 280);
                    const cy = 40 + ((i * 19) % 160);
                    const r = ((i * 13) % 3) + 1;
                    const opacity = 0.6 + ((i * 7) % 40) / 100;
                    
                    return (
                      <circle 
                        key={i}
                        cx={cx} 
                        cy={cy} 
                        r={r}
                        fill={i % 3 === 0 ? 'var(--accent-1)' : i % 3 === 1 ? 'var(--accent-2)' : 'var(--accent-4)'}
                        opacity={opacity}
                      />
                    );
                  })}
                </svg>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>LiDAR Point Clouds</h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: 1.6
                }}>
                  Multi-class point cloud segmentation for autonomous vehicle perception
                </p>
              </div>
            </div>

            {/* Example 6: Video Tracking */}
            <div className="card fade-in-up" style={{
              padding: '0',
              overflow: 'hidden',
              transition: 'all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '';
            }}>
              <div style={{
                height: '240px',
                background: 'linear-gradient(135deg, rgba(255,23,68,0.08), rgba(0,217,255,0.08))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                borderBottom: '2px solid var(--card-border)'
              }}>
                <svg width="100%" height="100%" viewBox="0 0 400 240">
                  {/* Video frames with tracking trail */}
                  <rect x="60" y="80" width="80" height="60" fill="none" stroke="var(--accent-1)" strokeWidth="2" opacity="0.3"/>
                  <rect x="100" y="75" width="80" height="60" fill="none" stroke="var(--accent-1)" strokeWidth="2" opacity="0.5"/>
                  <rect x="140" y="70" width="80" height="60" fill="none" stroke="var(--accent-1)" strokeWidth="3" opacity="0.7"/>
                  <rect x="180" y="65" width="80" height="60" fill="none" stroke="var(--accent-1)" strokeWidth="3" opacity="1"/>
                  <path d="M100 110 Q140 108 180 105" stroke="var(--accent-4)" strokeWidth="2" fill="none" strokeDasharray="4"/>
                  <text x="185" y="60" fill="var(--accent-4)" fontSize="12" fontWeight="700">ID: 47</text>
                </svg>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>Video Object Tracking</h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  lineHeight: 1.6
                }}>
                  Multi-frame tracking with unique IDs for temporal consistency and motion analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ padding: '80px 6vw' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '60px'
          }}>Perfect For Your AI Projects</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px'
          }}>
            {[
              {
                icon: '🚗',
                title: 'Autonomous Vehicles',
                items: ['Lane Detection', 'Traffic Sign Recognition', 'Pedestrian Tracking', '3D Scene Understanding']
              },
              {
                icon: '🏥',
                title: 'Medical Imaging',
                items: ['Organ Segmentation', 'Tumor Detection', 'X-ray Analysis', 'Diagnostic Support']
              },
              {
                icon: '🛍️',
                title: 'Retail & E-commerce',
                items: ['Product Recognition', 'Shelf Monitoring', 'Customer Behavior', 'Visual Search']
              },
              {
                icon: '🔒',
                title: 'Security & Surveillance',
                items: ['Face Recognition', 'Anomaly Detection', 'Crowd Analysis', 'Threat Identification']
              },
              {
                icon: '🌾',
                title: 'Agriculture',
                items: ['Crop Monitoring', 'Disease Detection', 'Yield Prediction', 'Drone Imagery']
              },
              {
                icon: '🤖',
                title: 'Robotics',
                items: ['Object Manipulation', 'Navigation', 'Obstacle Avoidance', 'Pick & Place']
              },
              {
                icon: '🏭',
                title: 'Manufacturing',
                items: ['Defect Detection', 'Quality Control', 'Assembly Verification', 'Predictive Maintenance']
              },
              {
                icon: '🛰️',
                title: 'Geospatial & Mapping',
                items: ['Land Classification', 'Infrastructure Monitoring', 'Change Detection', 'Urban Planning']
              }
            ].map((useCase, idx) => (
              <div key={idx} className="card fade-in-up" style={{
                padding: '32px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '56px', marginBottom: '16px' }}>{useCase.icon}</div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '16px'
                }}>{useCase.title}</h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  textAlign: 'left'
                }}>
                  {useCase.items.map((item, i) => (
                    <li key={i} style={{
                      padding: '6px 0',
                      color: 'var(--text-secondary)',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span style={{ color: 'var(--accent-1)' }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process - Flowing Design */}
      <section style={{
        padding: '80px 6vw',
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '80px'
          }}>How We Work</h2>

          <div style={{ position: 'relative' }}>
            {/* Flowing connection line */}
            <svg style={{
              position: 'absolute',
              top: '60px',
              left: '0',
              width: '100%',
              height: '100px',
              zIndex: 0
            }} viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path 
                d="M0,50 Q250,10 500,50 T1000,50" 
                fill="none" 
                stroke="var(--accent-1)" 
                strokeWidth="3"
                opacity="0.2"
                strokeDasharray="10,5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="15"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '40px',
              position: 'relative'
            }}>
              {[
                {
                  num: '01',
                  title: 'Project Consultation',
                  desc: 'We analyze your dataset, understand requirements, and define annotation guidelines'
                },
                {
                  num: '02',
                  title: 'Team Assembly',
                  desc: 'Assign specialized annotators trained in your domain and data type'
                },
                {
                  num: '03',
                  title: 'Quality Annotation',
                  desc: 'Execute precise labeling with multiple review layers and consistency checks'
                },
                {
                  num: '04',
                  title: 'Delivery & Support',
                  desc: 'Deliver in your preferred format with ongoing support and iterations'
                }
              ].map((step, idx) => (
                <div key={idx} className="fade-in-up" style={{
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {/* Animated circle */}
                  <div style={{
                    width: '120px',
                    height: '120px',
                    margin: '0 auto 24px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, var(--accent-1), var(--accent-4))`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    fontWeight: 900,
                    color: 'white',
                    boxShadow: '0 10px 40px rgba(255, 107, 53, 0.4)',
                    position: 'relative',
                    animation: 'float 3s ease-in-out infinite',
                    animationDelay: `${idx * 0.2}s`
                  }}>
                    {step.num}
                    {/* Pulse ring */}
                    <div style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      border: '3px solid var(--accent-1)',
                      animation: 'pulse 2s ease-out infinite',
                      animationDelay: `${idx * 0.2}s`
                    }}></div>
                  </div>
                  
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    marginBottom: '12px',
                    color: 'var(--text-primary)'
                  }}>{step.title}</h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '15px',
                    lineHeight: 1.6
                  }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Flow - 3 Level Checks - Ultra Animated */}
      <section style={{
        padding: '100px 6vw',
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated background particles */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          opacity: 0.03,
          pointerEvents: 'none'
        }}>
          {mounted && Array.from({ length: 20 }).map((_, i) => {
            const size = (i * 7) % 100 + 50;
            const top = (i * 17) % 100;
            const left = (i * 23) % 100;
            const duration = (i % 10) + 5;
            const delay = (i % 5);
            
            return (
              <div key={i} style={{
                position: 'absolute',
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
                background: 'var(--accent-1)',
                top: `${top}%`,
                left: `${left}%`,
                animation: `float ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`
              }}></div>
            );
          })}
        </div>

        <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              display: 'inline-block',
              padding: '10px 24px',
              background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(255, 23, 68, 0.15))',
              borderRadius: '30px',
              marginBottom: '20px',
              border: '2px solid rgba(255, 107, 53, 0.3)'
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: 800,
                color: 'var(--accent-1)',
                letterSpacing: '2px'
              }}>⚡ QUALITY ASSURANCE</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 900,
              marginBottom: '20px',
              background: 'linear-gradient(135deg, var(--text-primary), var(--accent-1))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>3-Level Quality Pipeline</h2>
            <p style={{
              fontSize: '20px',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7
            }}>
              Triple validation ensuring <span style={{ 
                color: 'var(--accent-1)', 
                fontWeight: 800,
                fontSize: '22px'
              }}>up to 95.99% accuracy</span> on every annotation
            </p>
          </div>

          {/* Flowing Pipeline Visualization */}
          <div style={{ position: 'relative', marginBottom: '60px' }}>
            {/* Curved animated path */}
            <svg style={{
              position: 'absolute',
              width: '100%',
              height: '200px',
              top: '80px',
              left: 0,
              zIndex: 0
            }} viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid meet">
              {/* Path */}
              <path 
                d="M 100 100 Q 400 40, 600 100 T 1100 100" 
                fill="none" 
                stroke="url(#pathGradient)" 
                strokeWidth="4"
                strokeDasharray="10 5"
              />
              {/* Animated particles */}
              <circle r="8" fill="var(--accent-1)">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  path="M 100 100 Q 400 40, 600 100 T 1100 100"
                />
                <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite"/>
              </circle>
              <circle r="8" fill="var(--accent-2)">
                <animateMotion
                  dur="4s"
                  begin="1.3s"
                  repeatCount="indefinite"
                  path="M 100 100 Q 400 40, 600 100 T 1100 100"
                />
                <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="1.3s" repeatCount="indefinite"/>
              </circle>
              <circle r="8" fill="#10b981">
                <animateMotion
                  dur="4s"
                  begin="2.6s"
                  repeatCount="indefinite"
                  path="M 100 100 Q 400 40, 600 100 T 1100 100"
                />
                <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="2.6s" repeatCount="indefinite"/>
              </circle>
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--accent-1)" stopOpacity="0.3"/>
                  <stop offset="50%" stopColor="var(--accent-2)" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
            </svg>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '40px',
              position: 'relative',
              zIndex: 1
            }}>
              {[
                {
                  level: 'Level 1',
                  title: 'Initial Annotation',
                  desc: 'Expert annotators label data following strict guidelines',
                  accuracy: '90-92%',
                  color: 'var(--accent-1)',
                  gradient: 'linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(255, 107, 53, 0.05))'
                },
                {
                  level: 'Level 2',
                  title: 'Peer Review',
                  desc: 'Secondary team validates and corrects annotations',
                  accuracy: '93-94%',
                  color: 'var(--accent-2)',
                  gradient: 'linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(0, 217, 255, 0.05))'
                },
                {
                  level: 'Level 3',
                  title: 'Final QA',
                  desc: 'Senior specialists perform comprehensive audit',
                  accuracy: '95-95.99%',
                  color: '#10b981',
                  gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05))'
                }
              ].map((level, idx) => (
                <div key={idx} className="fade-in-up" style={{
                  position: 'relative'
                }}>
                  {/* Animated container */}
                  <div style={{
                    background: level.gradient,
                    padding: '40px 28px',
                    borderRadius: '24px',
                    border: `3px solid transparent`,
                    backgroundImage: `${level.gradient}, linear-gradient(var(--card-bg), var(--card-bg))`,
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    transition: 'all 500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-16px) scale(1.03)';
                    e.currentTarget.style.boxShadow = `0 30px 70px ${level.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    {/* Animated glow effect */}
                    <div style={{
                      position: 'absolute',
                      top: '-50%',
                      left: '-50%',
                      width: '200%',
                      height: '200%',
                      background: `radial-gradient(circle, ${level.color}20 0%, transparent 70%)`,
                      animation: 'rotateBg 20s linear infinite',
                      opacity: 0.5
                    }}></div>

                    {/* Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: level.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      fontWeight: 900,
                      color: 'white',
                      boxShadow: `0 8px 24px ${level.color}60`,
                      animation: 'pulse 2s ease-in-out infinite',
                      animationDelay: `${idx * 0.4}s`
                    }}>
                      {idx + 1}
                    </div>

                    {/* Icon with animation */}
                    <div style={{
                      width: '90px',
                      height: '90px',
                      margin: '0 auto 24px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${level.color}, ${level.color}80)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 12px 40px ${level.color}40`,
                      animation: 'float 3s ease-in-out infinite',
                      animationDelay: `${idx * 0.3}s`,
                      position: 'relative'
                    }}>
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        {idx === 2 ? (
                          <>
                            <circle cx="24" cy="24" r="16" stroke="white" strokeWidth="3"/>
                            <path d="M16 24 L22 30 L32 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <animate attributeName="stroke-dasharray" values="0 100; 100 0" dur="2s" repeatCount="indefinite"/>
                            </path>
                          </>
                        ) : (
                          <path d="M12 24 L20 32 L36 16" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <animate attributeName="stroke-dasharray" values="0 100; 100 0" dur="2s" repeatCount="indefinite"/>
                          </path>
                        )}
                      </svg>
                      {/* Orbiting ring */}
                      <div style={{
                        position: 'absolute',
                        width: '110px',
                        height: '110px',
                        borderRadius: '50%',
                        border: `2px dashed ${level.color}`,
                        animation: 'rotateBg 10s linear infinite',
                        opacity: 0.4
                      }}></div>
                    </div>

                    {/* Level badge */}
                    <div style={{
                      display: 'inline-block',
                      padding: '8px 20px',
                      background: level.color,
                      borderRadius: '30px',
                      fontSize: '12px',
                      fontWeight: 900,
                      color: 'white',
                      marginBottom: '16px',
                      letterSpacing: '1.5px',
                      boxShadow: `0 4px 16px ${level.color}40`
                    }}>
                      {level.level.toUpperCase()}
                    </div>

                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: 800,
                      marginBottom: '12px',
                      color: 'var(--text-primary)'
                    }}>{level.title}</h3>

                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '15px',
                      lineHeight: 1.7,
                      marginBottom: '24px',
                      minHeight: '60px'
                    }}>{level.desc}</p>

                    {/* Accuracy meter */}
                    <div style={{
                      background: 'var(--bg-primary)',
                      padding: '20px',
                      borderRadius: '16px',
                      textAlign: 'center',
                      border: `2px solid ${level.color}30`
                    }}>
                      <div style={{
                        fontSize: '32px',
                        fontWeight: 900,
                        color: level.color,
                        marginBottom: '6px',
                        textShadow: `0 0 20px ${level.color}40`
                      }}>
                        {level.accuracy}
                      </div>
                      <div style={{
                        fontSize: '11px',
                        color: 'var(--text-secondary)',
                        fontWeight: 700,
                        letterSpacing: '1px'
                      }}>ACCURACY RATE</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Stats Banner */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(0, 217, 255, 0.1))',
            padding: '50px',
            borderRadius: '28px',
            border: '3px solid var(--card-border)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Animated background */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.1), transparent)',
              animation: 'slideInRight 3s ease-in-out infinite'
            }}></div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '40px',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1
            }}>
              {[
                { value: '95.99%', label: 'Peak Accuracy', icon: '🎯' },
                { value: '3x', label: 'Review Layers', icon: '🔄' },
                { value: '100%', label: 'Quality Guarantee', icon: '✓' },
                { value: '24/7', label: 'Support', icon: '🚀' }
              ].map((stat, idx) => (
                <div key={idx} className="fade-in-up" style={{ 
                  animationDelay: `${idx * 0.15}s`
                }}>
                  <div style={{
                    fontSize: '40px',
                    marginBottom: '12px'
                  }}>{stat.icon}</div>
                  <div style={{
                    fontSize: '42px',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, var(--accent-1), var(--accent-4))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '8px'
                  }}>{stat.value}</div>
                  <div style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    fontWeight: 700,
                    letterSpacing: '0.5px'
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 6vw' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '60px'
          }}>Why Choose Our Services</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px'
          }}>
            {[
              {
                icon: '⚡',
                title: 'Fast Turnaround',
                desc: 'Flexible scaling to meet your deadlines without compromising quality'
              },
              {
                icon: '🎯',
                title: 'Pixel-Perfect Accuracy',
                desc: 'Meticulous attention to detail with multi-tier quality control'
              },
              {
                icon: '🔐',
                title: 'Data Security',
                desc: 'Strict NDAs, encrypted transfers, and secure annotation platforms'
              },
              {
                icon: '🛠️',
                title: 'Custom Workflows',
                desc: 'Tailored annotation pipelines to match your specific requirements'
              },
              {
                icon: '💰',
                title: 'Competitive Pricing',
                desc: 'Transparent pricing models that fit startups and enterprises alike'
              },
              {
                icon: '🤝',
                title: 'Dedicated Support',
                desc: '24/7 project management and technical support throughout'
              }
            ].map((feature, idx) => (
              <div key={idx} className="card fade-in-up" style={{
                padding: '32px',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  fontSize: '40px',
                  flexShrink: 0
                }}>{feature.icon}</div>
                <div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    marginBottom: '8px'
                  }}>{feature.title}</h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    margin: 0
                  }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '80px 6vw',
        background: 'linear-gradient(135deg, var(--accent-1), var(--accent-4))',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            color: 'white',
            marginBottom: '20px'
          }}>Ready to Label Your Dataset?</h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '32px',
            lineHeight: 1.7
          }}>
            Get a free consultation and custom quote for your annotation project
          </p>
          <a href="/#contact" style={{
            display: 'inline-block',
            padding: '18px 48px',
            fontSize: '18px',
            fontWeight: 700,
            background: 'white',
            color: 'var(--accent-1)',
            border: 'none',
            borderRadius: '10px',
            textDecoration: 'none',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            transition: 'all 300ms ease'
          }}>
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
