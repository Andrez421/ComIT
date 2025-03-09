import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Skill = {
  name: string;
  level: number; // 0-100
};

type ProgressBarProps = {
  level: number;
  color?: string;
};

const ProgressBar = ({ level, color = '#007AFF' }: ProgressBarProps) => {
  return (
    <View style={styles.progressBarContainer}>
      <View 
        style={[styles.progressBar, { width: `${level}%`, backgroundColor: color }]}
      />
    </View>
  );
};

type SkillItemProps = {
  skill: Skill;
};

const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <View style={styles.skillItem}>
      <Text style={styles.skillName}>{skill.name}</Text>
      <View style={styles.skillLevelContainer}>
        <ProgressBar level={skill.level} />
      </View>
    </View>
  );
};

type HabilidadesProps = {
  skills: Skill[];
};

export const Habilidades = ({ skills }: HabilidadesProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habilidades</Text>
      <View style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <SkillItem key={`${index}-${skill.name}`} skill={skill} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'darkblue',
    marginBottom: 15,
    alignSelf: 'center',
  },
  skillsContainer: {
    width: '100%',
    gap: 10,
  },
  skillItem: {
    flexDirection: 'column',
    marginBottom: 12,
  },
  skillName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'darkblue',
    marginBottom: 4,
    alignSelf: 'center',
  },
  skillLevelContainer: {
    width: '100%',
  },
  progressBarContainer: {
    flex: 1,
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 5,
  },

});