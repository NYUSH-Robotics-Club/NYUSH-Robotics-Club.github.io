import React from 'react';
import { useTranslation } from 'react-i18next';

function Members() {
  const { t } = useTranslation();
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/videos/Members.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1>{t('membersPage.facultyMentor')}</h1>
        <div className="member faculty-mentor">
          <a href="https://sites.google.com/view/chandrashekar/home" target="_blank" rel="noreferrer">
            <img src="/images/Chandra.jpg" alt="Chandrashekar Radhakrishnan" />
          </a>
          <h3>Chandrashekar Radhakrishnan</h3>
          <p>{t('membersPage.visitingProfessor')}</p>
        </div>

        <h1>{t('membersPage.boardMemberProfile')}</h1>
        <div className="members-wall">
          <div className="member">
            <img src="/images/Evan.JPG" alt="Evan Xiao" />
            <h3>Evan Xiao</h3>
            <p>{t('membersPage.president')}</p>
          </div>
          <div className="member">
            <img src="/images/Kyle.jpg" alt="Kyle Chen" />
            <h3>Kyle Chen</h3>
            <p>{t('membersPage.vicePresident')}</p>
          </div>
          <div className="member">
            <img src="/images/Allen.jpg" alt="Allen Vikram Chand" />
            <h3>Allen Vikram Chand</h3>
            <p>{t('membersPage.competitionTeamLeader')}</p>
          </div>
          <div className="member">
            <img src="/images/Lewis.jpg" alt="Lewis Zhang" />
            <h3>Lewis Zhang</h3>
            <p>{t('membersPage.directorProgramming')}</p>
          </div>
          <div className="member">
            <img src="/images/Eric.jpg" alt="Eric Liang" />
            <h3>Eric Liang</h3>
            <p>{t('membersPage.directorMechanical')}</p>
          </div>
          <div className="member">
            <img src="/images/Jeff.jpg" alt="Jeffrey Isman" />
            <h3>Jeffrey Isman</h3>
            <p>{t('membersPage.directorSoftware')}</p>
          </div>
          <div className="member">
            <img src="/images/Noelia.jpg" alt="Noelia Yang" />
            <h3>Noelia Yang</h3>
            <p>{t('membersPage.directorResearch')}</p>
          </div>
          <div className="member">
            <img src="/images/Leo.jpg" alt="Leo Lei" />
            <h3>Leo Lei</h3>
            <p>{t('membersPage.directorMarketing')}</p>
          </div>
          <div className="member">
            <img src="/images/Carlos.jpg" alt="Carlos Chen" />
            <h3>Carlos Qu</h3>
            <p>{t('membersPage.directorMedia')}</p>
          </div>
        </div>

        <div className="content">
          <h1>{t('membersPage.vexUTeam')}</h1>
          <div className="members-wall">
            <div className="member">
              <img src="/images/Allen.jpg" alt="Allen Vikram Chand" />
              <h3>Allen Vikram Chand</h3>
              <p>{t('membersPage.teamLeader')}</p>
            </div>
            <div className="member">
              <img src="/images/Evan.JPG" alt="Evan Xiao" />
              <h3>Evan Xiao</h3>
            </div>
            <div className="member">
              <img src="/images/Eric.jpg" alt="Eric Liang" />
              <h3>Eric Liang</h3>
            </div>
            <div className="member">
              <img src="/images/Lewis.jpg" alt="Lewis Zhang" />
              <h3>Lewis Zhang</h3>
            </div>
            <div className="member">
              <img src="/images/Kyle.jpg" alt="Kyle Chen" />
              <h3>Kyle Chen</h3>
            </div>
            <div className="member">
              <img src="/images/Jeff.jpg" alt="Jeffrey Isman" />
              <h3>Jeffrey Isman</h3>
            </div>
            <div className="member">
              <img src="/images/Siona_Phan.jpg" alt="Siona Siona Phan" />
              <h3>Siona Phan</h3>
            </div>
            <div className="member">
              <img src="/images/Edward Peng.jpg" alt="Edward Peng" />
              <h3>Edward Peng</h3>
            </div>
            <div className="member">
              <img src="/images/Jason Xu.jpg" alt="Jason Xu" />
              <h3>Jason Xu</h3>
            </div>
            <div className="member">
              <img src="/images/William Wei.jpg" alt="William Wei" />
              <h3>William Wei</h3>
            </div>
            <div className="member">
              <img src="/images/Eric Jin.jpg" alt="Eric Jin" />
              <h3>Eric Jin</h3>
            </div>
            <div className="member">
              <img src="/images/Muhammad.jpg" alt="Muhammad Huzyafa Khokhar" />
              <h3>Muhammad Huzyafa Khokhar</h3>
            </div>
            <div className="member">
              <img src="/images/Andy Lu.pic.jpg" alt="Andy Lu" />
              <h3>Andy Lu</h3>
            </div>
            <div className="member">
              <img src="/images/Chanikan(Yiru) Poltanawasit.pic.jpg" alt="Chanikan(Yiru) Poltanawasit" />
              <h3>Chanikan (Yiru) Poltanawasit</h3>
            </div>
            <div className="member">
              <img src="/images/Daniyal Malik.pic.jpg" alt="Daniyal Malik" />
              <h3>Daniyal Malik</h3>
            </div>
          </div>
        </div>

        <h1>{t('membersPage.educationTeam')}</h1>
        <div className="members-wall">
          <div className="member">
            <img src="/images/Deniz Acar Köstem.jpg" alt="Deniz Acar Köstem" />
            <h3>Deniz Acar Köstem</h3>
          </div>
        </div>

        <h1>{t('membersPage.marketingTeam')}</h1>
        <div className="members-wall">
          <div className="member">
            <img src="/images/Perla.jpg" alt="Perla Dai" />
            <h3>Perla Dai</h3>
            <p>{t('membersPage.marketingMember')}</p>
          </div>
          <div className="member">
            <img src="/images/Blair.jpg" alt="Blair Zhou" />
            <h3>Blair Zhou</h3>
            <p>{t('membersPage.marketingMember')}</p>
          </div>
          <div className="member">
            <img src="/images/Anna Liu.jpg" alt="Anna Liu" />
            <h3>Anna Liu</h3>
            <p>{t('membersPage.marketingMember')}</p>
          </div>
          <div className="member">
            <img src="/images/Tiffany Wang.JPG" alt="Tiffany Wang" />
            <h3>Tiffany Wang</h3>
            <p>{t('membersPage.marketingMember')}</p>
          </div>
        </div>

        <h1>{t('membersPage.mediaTeam')}</h1>
        <div className="members-wall">
          <div className="member">
            <img src="/images/Torico.jpg" alt="Torico Chen" />
            <h3>Torico Chen</h3>
            <p>{t('membersPage.mediaMember')}</p>
          </div>
          <div className="member">
            <img src="/images/Melissa.jpg" alt="Melissa Miao" />
            <h3>Melissa Miao</h3>
            <p>{t('membersPage.mediaMember')}</p>
          </div>
          <div className="member">
            <img src="/images/Cicci Shao.jpg" alt="Cicci Shao" />
            <h3>Cicci Shao</h3>
            <p>{t('membersPage.mediaMember')}</p>
          </div>
          <div className="member">
            <img src="/images/Xinyi Sun.jpg" alt="Xinyi Sun" />
            <h3>Xinyi Sun</h3>
            <p>{t('membersPage.mediaMember')}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Members;
